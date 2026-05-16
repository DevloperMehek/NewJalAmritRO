"import { Wrench, Filter, Settings, TestTube, Hammer, ShieldCheck, Sparkles, ArrowRight } from \"lucide-react\";
import { Button } from \"@/components/ui/button\";
import { useLang } from \"@/contexts/LangContext\";
import { useBooking } from \"@/contexts/BookingContext\";
import { SERVICES, OFFERS } from \"@/data/products\";

const ICONS = { Wrench, Filter, Settings, TestTube, Hammer, ShieldCheck };

const Services = () => {
  const { lang, t } = useLang();
  const { openBooking } = useBooking();

  return (
    <div data-testid=\"services-page\">
      {/* Hero */}
      <section className=\"bg-water-grad pt-14 pb-12 lg:pt-20 lg:pb-16 relative overflow-hidden\">
        <div className=\"absolute inset-0 opacity-40\">
          <div className=\"absolute -top-12 right-1/3 w-72 h-72 bg-[#00A3E0]/30 rounded-full blur-3xl\" />
        </div>
        <div className=\"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0]\">All-in-One Care</div>
          <h1 className=\"mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B3B60]\">{t(\"services_title\")}</h1>
          <p className=\"mt-3 text-lg text-slate-600 max-w-2xl\">{t(\"services_subtitle_long\")}</p>
        </div>
      </section>

      {/* Active Offers */}
      <section className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16\">
        <div className=\"flex items-center gap-3 mb-8\">
          <Sparkles className=\"text-[#FF7A00]\" size={22} />
          <h2 className=\"font-display text-2xl sm:text-3xl font-extrabold text-[#0B3B60]\">{t(\"active_offers\")}</h2>
        </div>
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5\" data-testid=\"services-active-offers\">
          {OFFERS.map((o) => (
            <div
              key={o.id}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${o.color} text-white p-6 lift-on-hover min-h-[230px] flex flex-col justify-between`}
              data-testid={`services-offer-${o.id}`}
            >
              <div className=\"absolute -bottom-12 -right-12 opacity-20\">
                <img src={o.poster} alt=\"\" className=\"w-44 h-44 object-cover rounded-2xl\" />
              </div>
              <div className=\"relative\">
                <Sparkles size={20} className=\"mb-3\" />
                <h3 className=\"font-display text-xl font-extrabold leading-tight drop-shadow-md\">{lang === \"hi\" ? o.title_hi : o.title_en}</h3>
                <p className=\"text-sm text-white/85 mt-2\">{lang === \"hi\" ? o.sub_hi : o.sub_en}</p>
              </div>
              <button
                onClick={() => openBooking(lang === \"hi\" ? o.title_hi : o.title_en)}
                className=\"relative inline-flex items-center gap-1.5 bg-white text-[#0B3B60] font-bold rounded-full px-5 py-2 mt-5 self-start hover:scale-[1.03] transition shadow-md\"
                data-testid={`services-offer-cta-${o.id}`}
              >
                {o.cta} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className=\"bg-[#F4F9FF] py-16 lg:py-24\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0]\">Our Services</div>
          <h2 className=\"mt-2 font-display text-3xl sm:text-4xl font-extrabold text-[#0B3B60]\">Everything your RO needs</h2>

          <div className=\"mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6\" data-testid=\"services-grid\">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.icon] || Wrench;
              return (
                <div key={s.id} className=\"lift-on-hover relative bg-white rounded-3xl border border-slate-200 p-7\" data-testid={`service-card-${s.id}`}>
                  {s.badge && (
                    <span className=\"absolute top-5 right-5 bg-[#FF7A00] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full\">
                      {s.badge}
                    </span>
                  )}
                  <div className=\"w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00A3E0] to-[#0B3B60] text-white flex items-center justify-center shadow-lg shadow-cyan-500/20\">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className=\"font-display text-xl font-bold mt-5 text-[#0B3B60]\">{lang === \"hi\" ? s.title_hi : s.title_en}</h3>
                  <p className=\"text-slate-600 mt-2 leading-relaxed\">{lang === \"hi\" ? s.desc_hi : s.desc_en}</p>

                  <div className=\"mt-5 flex items-center justify-between\">
                    <span className=\"font-display text-2xl font-extrabold text-[#FF7A00]\">{s.price}</span>
                    <Button
                      onClick={() => openBooking(s.title_en)}
                      className=\"bg-[#0B3B60] hover:bg-[#00A3E0] text-white rounded-full px-5 h-9 text-sm font-semibold\"
                      data-testid={`service-book-${s.id}`}
                    >
                      {t(\"book_service\")}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RO Types Quick Reference */}
      <section className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24\">
        <h2 className=\"font-display text-3xl sm:text-4xl font-extrabold text-[#0B3B60]\">RO Types We Service</h2>
        <p className=\"text-slate-600 mt-2 max-w-xl\">All major brands and our own Jal Amrit assembled ROs starting at ₹4,999.</p>
        <div className=\"mt-8 grid grid-cols-2 md:grid-cols-4 gap-4\">
          {[\"Kent\", \"Aquaguard\", \"Livpure\", \"Pureit\", \"Aqua Innovica\", \"AO Smith\", \"Blue Star\", \"Jal Amrit\"].map((b) => (
            <div key={b} className=\"bg-white border border-slate-200 rounded-2xl p-6 text-center font-display font-bold text-[#0B3B60] hover:border-[#00A3E0] transition lift-on-hover\" data-testid={`brand-tile-${b.replace(/\s+/g, \"-\").toLowerCase()}`}>
              {b}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
"
