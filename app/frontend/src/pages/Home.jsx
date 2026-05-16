"import { useEffect, useState } from \"react\";
import { Link } from \"react-router-dom\";
import { ArrowRight, Phone, Droplet, Wrench, ShieldCheck, Award, Clock, Sparkles, Users, Star } from \"lucide-react\";
import { Button } from \"@/components/ui/button\";
import { useLang } from \"@/contexts/LangContext\";
import { useBooking } from \"@/contexts/BookingContext\";
import { CONTACT } from \"@/lib/translations\";
import { OFFERS, PRODUCTS, SERVICES } from \"@/data/products\";
import ProductCard from \"@/components/ProductCard\";

const ICONS = { Wrench, ShieldCheck, Sparkles, Award, Clock, Droplet };

const HeroCarousel = ({ offers }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % offers.length), 4500);
    return () => clearInterval(id);
  }, [offers.length]);
  const { lang, t } = useLang();
  const { openBooking } = useBooking();

  return (
    <div className=\"relative w-full max-w-md mx-auto\" data-testid=\"hero-offers-carousel\">
      <div className=\"relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/30\">
        {offers.map((o, i) => (
          <div
            key={o.id}
            className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? \"opacity-100\" : \"opacity-0 pointer-events-none\"}`}
            data-testid={`offer-slide-${o.id}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${o.color}`} />
            <img src={o.poster} alt=\"\" className=\"absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50\" />
            <div className=\"relative h-full flex flex-col justify-between p-7 text-white\">
              <div className=\"flex justify-between items-start\">
                <span className=\"bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider\">
                  {t(\"active_offers\")}
                </span>
                <Sparkles size={22} className=\"animate-float\" />
              </div>
              <div>
                <h3 className=\"font-display text-3xl sm:text-4xl font-extrabold leading-tight drop-shadow-md\">
                  {lang === \"hi\" ? o.title_hi : o.title_en}
                </h3>
                <p className=\"mt-2 text-white/90 text-sm sm:text-base\">
                  {lang === \"hi\" ? o.sub_hi : o.sub_en}
                </p>
                <Button
                  onClick={() => openBooking(lang === \"hi\" ? o.title_hi : o.title_en)}
                  className=\"mt-5 bg-white text-[#0B3B60] hover:bg-white/90 rounded-full px-6 h-11 font-bold shadow-lg\"
                  data-testid={`offer-cta-${o.id}`}
                >
                  {o.cta} <ArrowRight size={16} className=\"ml-1.5\" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=\"flex justify-center gap-2 mt-4\">
        {offers.map((o, i) => (
          <button
            key={o.id}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? \"bg-[#0B3B60] w-8\" : \"bg-slate-300 w-1.5\"}`}
            data-testid={`offer-dot-${i}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const { lang, t } = useLang();
  const { openBooking } = useBooking();
  const featured = [...PRODUCTS.domestic_branded.slice(0, 2), ...PRODUCTS.domestic_assembled.slice(0, 1), ...PRODUCTS.commercial_assembled.slice(0, 1)];

  const whyItems = [
    { icon: \"Award\", title: t(\"why_1_title\"), desc: t(\"why_1_desc\") },
    { icon: \"Wrench\", title: t(\"why_2_title\"), desc: t(\"why_2_desc\") },
    { icon: \"Clock\", title: t(\"why_3_title\"), desc: t(\"why_3_desc\") },
    { icon: \"ShieldCheck\", title: t(\"why_4_title\"), desc: t(\"why_4_desc\") },
  ];

  return (
    <div data-testid=\"home-page\">
      {/* HERO */}
      <section className=\"relative overflow-hidden bg-water-grad\">
        <div className=\"absolute inset-0 opacity-50\">
          <div className=\"absolute -top-20 -right-20 w-96 h-96 bg-[#00A3E0]/30 rounded-full blur-3xl\" />
          <div className=\"absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-[#0B3B60]/15 rounded-full blur-3xl\" />
        </div>

        <div className=\"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-20 lg:pb-28\">
          <div className=\"grid lg:grid-cols-2 gap-12 lg:gap-20 items-center\">
            <div>
              <div className=\"inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-white px-4 py-2 rounded-full text-xs font-bold text-[#0B3B60] uppercase tracking-wider shadow-sm\">
                <Droplet size={14} className=\"text-[#00A3E0]\" /> {t(\"hero_eyebrow\")}
              </div>
              <h1 className=\"mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B3B60] tracking-tight leading-[1.05]\">
                {t(\"hero_title\")}
              </h1>
              <p className=\"mt-3 text-2xl lg:text-3xl font-display font-bold shimmer-text\">
                {t(\"tagline\")}
              </p>
              <p className=\"mt-5 text-lg text-slate-600 max-w-xl leading-relaxed\">
                {t(\"hero_subtitle\")}
              </p>

              <div className=\"mt-8 flex flex-wrap gap-3\">
                <Button
                  onClick={() => openBooking()}
                  className=\"bg-[#FF7A00] hover:bg-[#E66E00] text-white rounded-full h-12 px-7 font-bold text-base shadow-lg shadow-orange-500/30 btn-pulse relative\"
                  data-testid=\"hero-book-demo-button\"
                >
                  <Droplet size={18} className=\"mr-2\" /> {t(\"hero_cta_primary\")}
                </Button>
                <Link to=\"/products\" data-testid=\"hero-explore-products-link\">
                  <Button
                    variant=\"outline\"
                    className=\"rounded-full h-12 px-7 font-bold text-base border-2 border-[#0B3B60] text-[#0B3B60] hover:bg-[#0B3B60] hover:text-white\"
                  >
                    {t(\"hero_cta_secondary\")} <ArrowRight size={18} className=\"ml-2\" />
                  </Button>
                </Link>
              </div>

              <div className=\"mt-10 flex flex-wrap items-center gap-6 text-sm\">
                <div className=\"flex items-center gap-2\"><Users size={18} className=\"text-[#00A3E0]\" /><span><b className=\"text-[#0B3B60]\">5,000+</b> happy families</span></div>
                <div className=\"flex items-center gap-2\"><Star size={18} className=\"text-yellow-500 fill-yellow-500\" /><span><b className=\"text-[#0B3B60]\">4.9</b> Google rating</span></div>
                <div className=\"flex items-center gap-2\"><Clock size={18} className=\"text-[#00A3E0]\" /><span>24-hr service</span></div>
              </div>
            </div>

            <div className=\"lg:pl-6\">
              <HeroCarousel offers={OFFERS} />
            </div>
          </div>
        </div>
        <div className=\"wave-divider h-16 -mt-1\" />
      </section>

      {/* WHY US */}
      <section className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28\">
        <div className=\"text-center max-w-2xl mx-auto\">
          <div className=\"text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0]\">{t(\"brand\")}</div>
          <h2 className=\"mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3B60]\">{t(\"why_choose_us\")}</h2>
        </div>
        <div className=\"mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6\" data-testid=\"why-us-grid\">
          {whyItems.map((it, i) => {
            const Icon = ICONS[it.icon] || Droplet;
            return (
              <div key={i} className=\"lift-on-hover bg-white p-7 rounded-3xl border border-slate-100\" data-testid={`why-card-${i}`}>
                <div className=\"w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00A3E0] to-[#0B3B60] text-white flex items-center justify-center shadow-lg shadow-cyan-500/20\">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className=\"font-display text-lg font-bold mt-5 text-[#0B3B60]\">{it.title}</h3>
                <p className=\"text-sm text-slate-600 mt-2 leading-relaxed\">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className=\"bg-[#F4F9FF] py-20 lg:py-28\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12\">
            <div>
              <div className=\"text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0]\">RO Range</div>
              <h2 className=\"mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3B60]\">{t(\"featured_products\")}</h2>
              <p className=\"mt-2 text-slate-600 max-w-xl\">{t(\"featured_subtitle\")}</p>
            </div>
            <Link to=\"/products\" data-testid=\"home-view-all-products\">
              <Button variant=\"outline\" className=\"rounded-full border-2 border-[#0B3B60] text-[#0B3B60] hover:bg-[#0B3B60] hover:text-white font-semibold\">
                {t(\"view_all\")} <ArrowRight size={16} className=\"ml-1.5\" />
              </Button>
            </Link>
          </div>

          <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6\" data-testid=\"featured-products-grid\">
            {featured.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28\">
        <div className=\"text-center max-w-2xl mx-auto\">
          <div className=\"text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0]\">Services</div>
          <h2 className=\"mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3B60]\">{t(\"services_preview\")}</h2>
          <p className=\"mt-3 text-slate-600\">{t(\"services_subtitle\")}</p>
        </div>

        <div className=\"mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6\" data-testid=\"home-services-grid\">
          {SERVICES.slice(0, 6).map((s) => {
            const Icon = ICONS[s.icon] || Wrench;
            return (
              <div key={s.id} className=\"lift-on-hover relative p-7 bg-white rounded-3xl border border-slate-200\" data-testid={`home-service-${s.id}`}>
                {s.badge && (
                  <span className=\"absolute top-5 right-5 bg-[#FF7A00] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full\">
                    {s.badge}
                  </span>
                )}
                <div className=\"w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-blue-100 text-[#0B3B60] flex items-center justify-center\">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className=\"font-display text-lg font-bold mt-5 text-[#0B3B60]\">{lang === \"hi\" ? s.title_hi : s.title_en}</h3>
                <p className=\"text-sm text-slate-600 mt-2 leading-relaxed\">{lang === \"hi\" ? s.desc_hi : s.desc_en}</p>
                <div className=\"mt-4 flex items-center justify-between\">
                  <span className=\"font-display font-extrabold text-xl text-[#FF7A00]\">{s.price}</span>
                  <button
                    onClick={() => openBooking(s.title_en)}
                    className=\"text-sm font-semibold text-[#0B3B60] hover:text-[#00A3E0]\"
                    data-testid={`home-service-cta-${s.id}`}
                  >
                    {t(\"book_now\")} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className=\"relative overflow-hidden\">
        <div className=\"absolute inset-0 bg-[#0B3B60]\" />
        <div className=\"absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,rgba(0,163,224,0.6),transparent_60%)]\" />
        <div className=\"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid lg:grid-cols-2 gap-8 items-center\">
          <div className=\"text-white\">
            <h2 className=\"font-display text-3xl lg:text-4xl font-extrabold leading-tight\">{t(\"cta_strip_title\")}</h2>
            <p className=\"mt-3 text-blue-100/90 text-lg\">{t(\"cta_strip_subtitle\")}</p>
          </div>
          <div className=\"flex flex-wrap justify-start lg:justify-end gap-3\">
            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className=\"inline-flex items-center gap-2 bg-white text-[#0B3B60] rounded-full h-13 px-7 py-3 font-bold text-base hover:bg-white/90 shadow-lg\"
              data-testid=\"cta-strip-call\"
            >
              <Phone size={18} /> {CONTACT.phone}
            </a>
            <Button
              onClick={() => openBooking()}
              className=\"bg-[#FF7A00] hover:bg-[#E66E00] text-white rounded-full h-13 px-7 font-bold text-base shadow-lg\"
              data-testid=\"cta-strip-book\"
            >
              <Droplet size={18} className=\"mr-2\" /> {t(\"book_now\")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
"
