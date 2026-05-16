"import { useState, useEffect } from \"react\";
import axios from \"axios\";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from \"@/components/ui/dialog\";
import { Input } from \"@/components/ui/input\";
import { Textarea } from \"@/components/ui/textarea\";
import { Button } from \"@/components/ui/button\";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from \"@/components/ui/select\";
import { Label } from \"@/components/ui/label\";
import { Droplet, Loader2 } from \"lucide-react\";
import { toast } from \"sonner\";
import { useLang } from \"@/contexts/LangContext\";
import { CONTACT } from \"@/lib/translations\";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SERVICE_OPTIONS = [
  \"New RO Purchase – Domestic\",
  \"New RO Purchase – Commercial\",
  \"RO Service @ ₹99\",
  \"Filter Change\",
  \"RO Repair\",
  \"Water Testing\",
  \"Rental RO\",
  \"AMC Plan\",
  \"General Enquiry\",
];

const BookNowModal = ({ open, onOpenChange, presetService }) => {
  const { t } = useLang();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: \"\",
    location: \"\",
    contact: \"\",
    email: \"\",
    service_interest: \"General Enquiry\",
    message: \"\",
  });

  useEffect(() => {
    if (open && presetService) {
      setForm((f) => ({ ...f, service_interest: presetService }));
    }
  }, [open, presetService]);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || !form.location.trim()) {
      toast.error(\"Please fill name, location and mobile.\");
      return;
    }
    setSubmitting(true);
    try {
      const payload = { ...form };
      if (!payload.email) delete payload.email;
      await axios.post(`${API}/leads`, payload);

      const waMessage = [
        `*New Enquiry — Jal Amrit RO*`,
        `Name: ${form.name}`,
        `Mobile: ${form.contact}`,
        `Location: ${form.location}`,
        form.email ? `Email: ${form.email}` : null,
        `Service: ${form.service_interest}`,
        form.message ? `Message: ${form.message}` : null,
      ]
        .filter(Boolean)
        .join(\"
\");

      const waUrl = `https://wa.me/${CONTACT.whatsappIntl}?text=${encodeURIComponent(waMessage)}`;
      toast.success(t(\"bn_success\"));
      window.open(waUrl, \"_blank\");
      onOpenChange(false);
      setForm({ name: \"\", location: \"\", contact: \"\", email: \"\", service_interest: \"General Enquiry\", message: \"\" });
    } catch (err) {
      toast.error(t(\"bn_error\"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=\"sm:max-w-lg p-0 overflow-hidden rounded-3xl\" data-testid=\"book-now-modal\">
        <div className=\"bg-gradient-to-br from-[#0B3B60] via-[#0B3B60] to-[#00A3E0] px-6 py-6 text-white\">
          <div className=\"flex items-center gap-3\">
            <div className=\"w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center\">
              <Droplet size={22} />
            </div>
            <div>
              <DialogHeader className=\"space-y-0 text-left\">
                <DialogTitle className=\"text-xl font-display font-bold text-white\">{t(\"bn_title\")}</DialogTitle>
                <DialogDescription className=\"text-blue-100/90 text-sm\">{t(\"bn_subtitle\")}</DialogDescription>
              </DialogHeader>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className=\"px-6 py-6 space-y-4 max-h-[70vh] overflow-y-auto\">
          <div className=\"grid grid-cols-1 sm:grid-cols-2 gap-4\">
            <div>
              <Label htmlFor=\"bn-name\" className=\"text-xs font-semibold text-slate-700\">
                {t(\"bn_name\")} *
              </Label>
              <Input
                id=\"bn-name\"
                value={form.name}
                onChange={update(\"name\")}
                placeholder=\"Aditya Gupta\"
                className=\"mt-1.5 rounded-xl border-slate-200 focus-visible:ring-[#00A3E0]\"
                data-testid=\"book-now-name-input\"
                required
              />
            </div>
            <div>
              <Label htmlFor=\"bn-contact\" className=\"text-xs font-semibold text-slate-700\">
                {t(\"bn_contact\")} *
              </Label>
              <Input
                id=\"bn-contact\"
                value={form.contact}
                onChange={update(\"contact\")}
                placeholder=\"98765 43210\"
                className=\"mt-1.5 rounded-xl border-slate-200 focus-visible:ring-[#00A3E0]\"
                data-testid=\"book-now-contact-input\"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor=\"bn-location\" className=\"text-xs font-semibold text-slate-700\">
              {t(\"bn_location\")} *
            </Label>
            <Input
              id=\"bn-location\"
              value={form.location}
              onChange={update(\"location\")}
              placeholder=\"MP Nagar, Bhopal\"
              className=\"mt-1.5 rounded-xl border-slate-200 focus-visible:ring-[#00A3E0]\"
              data-testid=\"book-now-location-input\"
              required
            />
          </div>

          <div>
            <Label htmlFor=\"bn-email\" className=\"text-xs font-semibold text-slate-700\">
              {t(\"bn_email\")}
            </Label>
            <Input
              id=\"bn-email\"
              type=\"email\"
              value={form.email}
              onChange={update(\"email\")}
              placeholder=\"you@example.com\"
              className=\"mt-1.5 rounded-xl border-slate-200 focus-visible:ring-[#00A3E0]\"
              data-testid=\"book-now-email-input\"
            />
          </div>

          <div>
            <Label className=\"text-xs font-semibold text-slate-700\">{t(\"bn_service\")}</Label>
            <Select value={form.service_interest} onValueChange={update(\"service_interest\")}>
              <SelectTrigger className=\"mt-1.5 rounded-xl border-slate-200 focus:ring-[#00A3E0]\" data-testid=\"book-now-service-select\">
                <SelectValue placeholder=\"Select a service\" />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_OPTIONS.map((s) => (
                  <SelectItem key={s} value={s} data-testid={`book-now-service-option-${s.replace(/\s+/g, \"-\").toLowerCase()}`}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor=\"bn-msg\" className=\"text-xs font-semibold text-slate-700\">
              {t(\"bn_message\")}
            </Label>
            <Textarea
              id=\"bn-msg\"
              value={form.message}
              onChange={update(\"message\")}
              placeholder=\"Tell us a bit about your requirement...\"
              className=\"mt-1.5 rounded-xl border-slate-200 focus-visible:ring-[#00A3E0] min-h-[80px]\"
              data-testid=\"book-now-message-input\"
            />
          </div>

          <Button
            type=\"submit\"
            disabled={submitting}
            className=\"w-full h-12 rounded-full bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold text-base shadow-lg\"
            data-testid=\"book-now-submit-button\"
          >
            {submitting ? (
              <>
                <Loader2 className=\"mr-2 animate-spin\" size={18} /> {t(\"bn_sending\")}
              </>
            ) : (
              t(\"bn_submit\")
            )}
          </Button>
          <p className=\"text-center text-xs text-slate-500\">
            {t(\"brand_full\")} • {CONTACT.phone} • {CONTACT.email}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookNowModal;
"
