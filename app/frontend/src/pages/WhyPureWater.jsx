"import { Droplet, ShieldAlert, Heart, Brain, Bone, Activity, Filter, Zap, Sparkles, TestTube, CheckCircle2 } from \"lucide-react\";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from \"@/components/ui/accordion\";
import { useLang } from \"@/contexts/LangContext\";
import { useBooking } from \"@/contexts/BookingContext\";
import { Button } from \"@/components/ui/button\";

const HEALTH_RISKS = [
  { icon: ShieldAlert, title: \"Waterborne Diseases\", text: \"Cholera, Typhoid, Hepatitis A — caused by bacteria & viruses in untreated water.\" },
  { icon: Brain, title: \"Heavy Metal Toxicity\", text: \"Lead, arsenic & mercury cause neurological damage and developmental issues in children.\" },
  { icon: Bone, title: \"Bone & Kidney Problems\", text: \"High TDS, fluoride and hard water lead to kidney stones and weak bones over time.\" },
  { icon: Activity, title: \"Digestive Disorders\", text: \"Contaminated water triggers IBS, ulcers and chronic diarrhoea.\" },
];

const RO_PARTS = [
  { icon: Filter, name: \"Sediment Filter\", desc: \"Removes mud, sand, dust & visible particles. First layer of defence.\" },
  { icon: Filter, name: \"Pre-Activated Carbon\", desc: \"Absorbs chlorine, pesticides, smells & bad taste from water.\" },
  { icon: Zap, name: \"RO Membrane\", desc: \"0.0001 micron filter — removes 99.9% TDS, heavy metals, bacteria.\" },
  { icon: Sparkles, name: \"UV Lamp\", desc: \"Kills any remaining viruses, bacteria & cysts.\" },
  { icon: TestTube, name: \"UF Membrane\", desc: \"Ultra-Filter blocks micro-organisms; works without electricity too.\" },
  { icon: Heart, name: \"Mineral / Copper Cartridge\", desc: \"Adds back essential minerals (Ca, Mg) and copper for taste & health.\" },
];

const FAQS = [
  {
    q: \"How often should I change RO filters?\",
    a: \"Pre-filters every 4–6 months, RO membrane every 18–24 months, UV lamp annually. We send free reminders to all our customers.\",
  },
  {
    q: \"What is the ideal TDS of drinking water?\",
    a: \"BIS recommends 50–150 ppm. Below 50 — too pure; above 300 — hard. Our ROs let you adjust TDS to keep healthy minerals.\",
  },
  {
    q: \"Branded RO vs Assembled — which should I buy?\",
    a: \"Branded ROs cost more (₹12k–25k) and offer brand warranty. Assembled Jal Amrit ROs start at ₹4,999 with same purification stages and 1-year warranty.\",
  },
  {
    q: \"Do you provide AMC for older ROs?\",
    a: \"Yes. Our ₹1,999/year AMC covers 4 services + free filter changes (terms apply) for any brand.\",
  },
  {
    q: \"Is service available outside Bhopal?\",
    a: \"We service Bhopal city and surrounding 30 km radius. For other locations, call us — we coordinate with partner technicians.\",
  },
];

const WhyPureWater = () => {
  const { t } = useLang();
  const { openBooking } = useBooking();

  return (
    <div data-testid=\"why-pure-water-page\">
      <section className=\"bg-water-grad pt-14 pb-12 lg:pt-20 lg:pb-16 relative overflow-hidden\">
        <div className=\"absolute -top-12 left-1/2 w-80 h-80 bg-[#00A3E0]/20 rounded-full blur-3xl\" />
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative\">
          <div className=\"text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0]\">Knowledge Centre</div>
          <h1 className=\"mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B3B60]\">{t(\"why_water_title\")}</h1>
          <p className=\"mt-3 text-lg text-slate-600 max-w-2xl\">{t(\"why_water_subtitle\")}</p>
        </div>
      </section>

      {/* Hero stats */}
      <section className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20\">
        <div className=\"grid lg:grid-cols-2 gap-12 items-center\">
          <div className=\"relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl\">
            <img
              src=\"https://images.unsplash.com/photo-1775760329453-ab2511792116?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHxwdXJlJTIwc3BsYXNoaW5nJTIwd2F0ZXIlMjBjbG9zZSUyMHVwfGVufDB8fHx8MTc3ODMyODkzMnww&ixlib=rb-4.1.0&q=85\"
              alt=\"Pure water\"
              className=\"w-full h-full object-cover\"
            />
          </div>
          <div>
            <h2 className=\"font-display text-3xl lg:text-4xl font-extrabold text-[#0B3B60] leading-tight\">
              60% of your body is <span className=\"text-[#00A3E0]\">water</span>. Make it pure.
            </h2>
            <ul className=\"mt-6 space-y-4\">
              {[
                \"WHO: 80% of all illnesses in developing countries come from contaminated water\",
                \"Bhopal groundwater TDS often exceeds 500 ppm — unsafe without RO\",
                \"Heavy metals like lead & arsenic are invisible, tasteless and dangerous\",
                \"RO + UV + UF removes 99.9% of bacteria, viruses, chemicals & TDS\",
              ].map((p, i) => (
                <li key={i} className=\"flex items-start gap-3\" data-testid={`pure-water-fact-${i}`}>
                  <CheckCircle2 size={22} className=\"text-emerald-500 mt-0.5 shrink-0\" />
                  <span className=\"text-slate-700\">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Health risks */}
      <section className=\"bg-[#F4F9FF] py-16 lg:py-24\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A00]\">Risks of Impure Water</div>
          <h2 className=\"mt-2 font-display text-3xl sm:text-4xl font-extrabold text-[#0B3B60]\">What's hiding in your tap water?</h2>
          <div className=\"mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5\" data-testid=\"health-risks-grid\">
            {HEALTH_RISKS.map((r, i) => (
              <div key={i} className=\"bg-white p-7 rounded-3xl border border-slate-100 lift-on-hover\" data-testid={`health-risk-${i}`}>
                <div className=\"w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-orange-100 text-rose-600 flex items-center justify-center\">
                  <r.icon size={22} />
                </div>
                <h3 className=\"font-display text-lg font-bold mt-5 text-[#0B3B60]\">{r.title}</h3>
                <p className=\"text-sm text-slate-600 mt-2 leading-relaxed\">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RO Parts */}
      <section className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24\">
        <div className=\"text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0]\">Inside Your RO</div>
        <h2 className=\"mt-2 font-display text-3xl sm:text-4xl font-extrabold text-[#0B3B60]\">7 layers of protection</h2>
        <p className=\"text-slate-600 mt-2 max-w-2xl\">Every Jal Amrit RO is engineered to deliver pure, safe and tasty water through multiple stages.</p>

        <div className=\"mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6\" data-testid=\"ro-parts-grid\">
          {RO_PARTS.map((p, i) => (
            <div key={i} className=\"relative bg-white p-7 rounded-3xl border border-slate-200 lift-on-hover\" data-testid={`ro-part-${i}`}>
              <div className=\"absolute -top-3 -left-3 w-9 h-9 rounded-full bg-[#FF7A00] text-white font-display font-extrabold text-sm flex items-center justify-center shadow-md\">
                {String(i + 1).padStart(2, \"0\")}
              </div>
              <div className=\"w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-cyan-100 text-[#0B3B60] flex items-center justify-center\">
                <p.icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className=\"font-display text-lg font-bold mt-5 text-[#0B3B60]\">{p.name}</h3>
              <p className=\"text-sm text-slate-600 mt-2 leading-relaxed\">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className=\"bg-[#F4F9FF] py-16 lg:py-24\">
        <div className=\"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0]\">FAQ</div>
          <h2 className=\"mt-2 font-display text-3xl sm:text-4xl font-extrabold text-[#0B3B60]\">Frequently asked questions</h2>

          <Accordion type=\"single\" collapsible className=\"mt-8 space-y-3\" data-testid=\"faq-accordion\">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className=\"bg-white rounded-2xl border border-slate-200 px-5\">
                <AccordionTrigger className=\"font-display font-bold text-left text-[#0B3B60] hover:no-underline\" data-testid={`faq-trigger-${i}`}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className=\"text-slate-600 leading-relaxed\">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16\">
        <div className=\"bg-gradient-to-br from-[#FF7A00] to-rose-600 rounded-[2rem] p-10 lg:p-14 text-white text-center relative overflow-hidden\">
          <Droplet size={70} className=\"absolute top-6 right-6 opacity-15 animate-float\" />
          <h3 className=\"font-display text-3xl lg:text-4xl font-extrabold\">Test your water — Free at home</h3>
          <p className=\"mt-3 max-w-2xl mx-auto text-orange-50\">Our team comes to your doorstep with a TDS meter, hardness kit & expert advice. Zero charges. Zero obligations.</p>
          <Button
            onClick={() => openBooking(\"Water Testing\")}
            className=\"mt-6 bg-white text-[#FF7A00] hover:bg-white/90 rounded-full h-12 px-8 font-bold text-base shadow-lg\"
            data-testid=\"why-water-test-cta\"
          >
            <TestTube size={18} className=\"mr-2\" /> Book Free Water Testing
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WhyPureWater;
"
