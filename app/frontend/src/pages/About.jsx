"import { Award, Target, Eye, Users, Droplet, Heart } from \"lucide-react\";
import { useLang } from \"@/contexts/LangContext\";
import { useBooking } from \"@/contexts/BookingContext\";
import { Button } from \"@/components/ui/button\";

const STATS = [
  { value: \"5,000+\", label: \"Happy Customers\" },
  { value: \"10+\", label: \"Years Experience\" },
  { value: \"8+\", label: \"Brands Serviced\" },
  { value: \"24h\", label: \"Response Time\" },
];

const About = () => {
  const { t } = useLang();
  const { openBooking } = useBooking();

  return (
    <div data-testid=\"about-page\">
      <section className=\"bg-water-grad pt-14 pb-12 lg:pt-20 lg:pb-16 relative overflow-hidden\">
        <div className=\"absolute -top-16 -right-16 w-80 h-80 bg-[#00A3E0]/30 rounded-full blur-3xl\" />
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative\">
          <div className=\"text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0]\">About Us</div>
          <h1 className=\"mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B3B60]\">{t(\"about_title\")}</h1>
          <p className=\"mt-3 text-xl lg:text-2xl text-slate-700 max-w-2xl font-medium\">{t(\"about_lead\")}</p>
        </div>
      </section>

      <section className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24\">
        <div className=\"grid lg:grid-cols-2 gap-12 lg:gap-16 items-start\">
          <div className=\"relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-slate-200\">
            <img
              src=\"https://static.prod-images.emergentagent.com/jobs/a35ffeab-4442-4d72-9740-0162a565569a/images/b775e2a9dab1b77889e9657c34a7d5f1d3f5c19311a86503144024516ef3e3c7.png\"
              alt=\"Jal Amrit technician\"
              className=\"w-full h-full object-cover\"
            />
            <div className=\"absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur rounded-2xl p-5 shadow-lg\">
              <div className=\"flex items-center gap-3\">
                <div className=\"w-12 h-12 rounded-xl bg-gradient-to-br from-[#00A3E0] to-[#0B3B60] text-white flex items-center justify-center\">
                  <Heart size={20} fill=\"white\" />
                </div>
                <div>
                  <div className=\"font-display font-bold text-[#0B3B60]\">Mr. Aditya Gupta</div>
                  <div className=\"text-xs text-slate-500\">Founder · Jal Amrit RO Sales & Service</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className=\"text-lg leading-relaxed text-slate-700\">{t(\"about_p1\")}</p>
            <p className=\"text-lg leading-relaxed text-slate-700 mt-5\">{t(\"about_p2\")}</p>

            <div className=\"grid grid-cols-2 gap-4 mt-10\" data-testid=\"about-stats\">
              {STATS.map((s) => (
                <div key={s.label} className=\"bg-[#F4F9FF] rounded-2xl p-5 border border-slate-100\">
                  <div className=\"font-display text-3xl font-extrabold text-[#0B3B60]\">{s.value}</div>
                  <div className=\"text-xs uppercase tracking-wider text-slate-500 mt-1\">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className=\"bg-[#F4F9FF] py-16 lg:py-24\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8\">
          <div className=\"bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 lift-on-hover\" data-testid=\"mission-card\">
            <div className=\"w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-rose-500 text-white flex items-center justify-center shadow-lg\">
              <Target size={26} />
            </div>
            <h3 className=\"font-display text-2xl font-extrabold mt-6 text-[#0B3B60]\">{t(\"our_mission\")}</h3>
            <p className=\"text-slate-600 mt-3 leading-relaxed\">{t(\"mission_text\")}</p>
          </div>
          <div className=\"bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 lift-on-hover\" data-testid=\"vision-card\">
            <div className=\"w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00A3E0] to-[#0B3B60] text-white flex items-center justify-center shadow-lg\">
              <Eye size={26} />
            </div>
            <h3 className=\"font-display text-2xl font-extrabold mt-6 text-[#0B3B60]\">{t(\"our_vision\")}</h3>
            <p className=\"text-slate-600 mt-3 leading-relaxed\">{t(\"vision_text\")}</p>
          </div>
        </div>
      </section>

      <section className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24\">
        <div className=\"bg-gradient-to-br from-[#0B3B60] via-[#0B3B60] to-[#00A3E0] rounded-[2rem] p-10 lg:p-16 text-center text-white relative overflow-hidden\">
          <Droplet size={80} className=\"absolute top-6 right-6 opacity-10\" />
          <Award size={70} className=\"absolute bottom-6 left-6 opacity-10\" />
          <Users size={28} className=\"mx-auto mb-3 opacity-90\" />
          <h3 className=\"font-display text-3xl lg:text-4xl font-extrabold\">Become part of the Jal Amrit family</h3>
          <p className=\"mt-3 text-blue-100/90 max-w-2xl mx-auto\">Free site visit, transparent pricing, lifetime support. Get your RO today.</p>
          <Button
            onClick={() => openBooking()}
            className=\"mt-6 bg-[#FF7A00] hover:bg-[#E66E00] text-white rounded-full h-12 px-8 font-bold text-base shadow-lg\"
            data-testid=\"about-book-cta\"
          >
            <Droplet size={18} className=\"mr-2\" /> {t(\"book_now\")}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
"
