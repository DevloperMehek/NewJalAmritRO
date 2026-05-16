"from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title=\"Jal Amrit RO API\")
api_router = APIRouter(prefix=\"/api\")


# ---------- Models ----------
class LeadCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    location: str = Field(..., min_length=1, max_length=200)
    contact: str = Field(..., min_length=6, max_length=20)
    email: Optional[EmailStr] = None
    service_interest: Optional[str] = Field(default=\"General Enquiry\", max_length=120)
    message: Optional[str] = Field(default=\"\", max_length=600)


class Lead(BaseModel):
    model_config = ConfigDict(extra=\"ignore\")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    location: str
    contact: str
    email: Optional[str] = None
    service_interest: Optional[str] = \"General Enquiry\"
    message: Optional[str] = \"\"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Routes ----------
@api_router.get(\"/\")
async def root():
    return {\"message\": \"Jal Amrit RO API is running\", \"service\": \"ok\"}


@api_router.get(\"/health\")
async def health():
    return {\"status\": \"ok\", \"ts\": datetime.now(timezone.utc).isoformat()}


@api_router.post(\"/leads\", response_model=Lead)
async def create_lead(payload: LeadCreate):
    lead = Lead(**payload.model_dump())
    doc = lead.model_dump()
    doc[\"created_at\"] = doc[\"created_at\"].isoformat()
    try:
        await db.leads.insert_one(doc)
    except Exception as e:
        logger.error(f\"Failed to save lead: {e}\")
        raise HTTPException(status_code=500, detail=\"Failed to save lead\")
    return lead


@api_router.get(\"/leads\", response_model=List[Lead])
async def list_leads(limit: int = 100):
    leads = await db.leads.find({}, {\"_id\": 0}).sort(\"created_at\", -1).to_list(limit)
    for l in leads:
        if isinstance(l.get(\"created_at\"), str):
            try:
                l[\"created_at\"] = datetime.fromisoformat(l[\"created_at\"])
            except Exception:
                l[\"created_at\"] = datetime.now(timezone.utc)
    return leads


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=[\"*\"],
    allow_headers=[\"*\"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event(\"shutdown\")
async def shutdown_db_client():
    client.close()
"
