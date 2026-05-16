"import { Link } from \"react-router-dom\";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Heart, Droplet } from \"lucide-react\";
import { useLang } from \"@/contexts/LangContext\";
import { useBooking } from \"@/contexts/BookingContext\";
import { CONTACT } from \"@/lib/translations\";
import { Button } from \"@/components/ui/button\";
import Logo from \"@/components/Logo\";

const Footer = () => {
  const { t } = useLang();
  const { openBooking } = useBooking();

  return (
    <footer className=\"bg-[#0B3B60] text-white pt-16 pb-8 mt-12\" data-testid=\"site-footer\">
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14\">
          {/* Brand */}
          <div className=\"lg:col-span-1\">
            <div className=\"bg-white/10 backdrop-blur rounded-2xl p-3 inline-block\">
              <Logo />
            </div>
            <p className=\"mt-5 text-blue-100/80 leading-relaxed text-sm max-w-xs\">{t(\"footer_about\")}</p>
            <div className=\"flex gap-3 mt-5\">
              <a
                href={`https://wa.me/${CONTACT.whatsappIntl}`}
                target=\"_blank\"
                rel=\"noreferrer\"
                className=\"w-10 h-10 rounded-full bg-[#25D366] hover:scale-110 transition-transform flex items-center justify-center\"
                data-testid=\"footer-whatsapp-link\"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={CONTACT.instagram}
                target=\"_blank\"
                rel=\"noreferrer\"
                className=\"w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 hover:scale-110 transition-transform flex items-center justify-center\"
                data-testid=\"footer-instagram-link\"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`tel:${CONTACT.phoneIntl}`}
                className=\"w-10 h-10 rounded-full bg-[#00A3E0] hover:scale-110 transition-transform flex items-center justify-center\"
                data-testid=\"footer-call-link\"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className=\"font-display text-sm tracking-[0.2em] uppercase font-bold text-white/70 mb-5\">
              {t(\"footer_quick_links\")}
            </h4>
            <ul className=\"space-y-3 text-blue-100/90\">
              <li><Link to=\"/\" className=\"hover:text-[#00A3E0] transition\" data-testid=\"footer-link-home\">{t(\"nav_home\")}</Link></li>
              <li><Link to=\"/products\" className=\"hover:text-[#00A3E0] transition\" data-testid=\"footer-link-products\">{t(\"nav_products\")}</Link></li>
              <li><Link to=\"/services\" className=\"hover:text-[#00A3E0] transition\" data-testid=\"footer-link-services\">{t(\"nav_services\")}</Link></li>
              <li><Link to=\"/why-pure-water\" className=\"hover:text-[#00A3E0] transition\" data-testid=\"footer-link-why\">{t(\"nav_why\")}</Link></li>
              <li><Link to=\"/about\" className=\"hover:text-[#00A3E0] transition\" data-testid=\"footer-link-about\">{t(\"nav_about\")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className=\"font-display text-sm tracking-[0.2em] uppercase font-bold text-white/70 mb-5\">
              {t(\"footer_contact\")}
            </h4>
            <ul className=\"space-y-4 text-blue-100/90 text-sm\">
              <li className=\"flex items-start gap-3\">
                <Phone size={18} className=\"mt-0.5 text-[#00A3E0] shrink-0\" />
                <a href={`tel:${CONTACT.phoneIntl}`} className=\"hover:text-white\" data-testid=\"footer-phone\">{CONTACT.phone}</a>
              </li>
              <li className=\"flex items-start gap-3\">
                <MessageCircle size={18} className=\"mt-0.5 text-[#25D366] shrink-0\" />
                <a href={`https://wa.me/${CONTACT.whatsappIntl}`} target=\"_blank\" rel=\"noreferrer\" className=\"hover:text-white\" data-testid=\"footer-whatsapp-num\">{CONTACT.whatsapp}</a>
              </li>
              <li className=\"flex items-start gap-3\">
                <Mail size={18} className=\"mt-0.5 text-[#00A3E0] shrink-0\" />
                <a href={`mailto:${CONTACT.email}`} className=\"hover:text-white break-all\" data-testid=\"footer-email\">{CONTACT.email}</a>
              </li>
              <li className=\"flex items-start gap-3\">
                <MapPin size={18} className=\"mt-0.5 text-[#00A3E0] shrink-0\" />
                <a href={CONTACT.mapsLink} target=\"_blank\" rel=\"noreferrer\" className=\"hover:text-white\" data-testid=\"footer-address\">
                  {t(\"footer_address\")}
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className=\"font-display text-sm tracking-[0.2em] uppercase font-bold text-white/70 mb-5\">
              {t(\"book_now\")}
            </h4>
            <p className=\"text-blue-100/80 text-sm mb-5 leading-relaxed\">
              {t(\"hero_subtitle\")}
            </p>
            <Button
              onClick={() => openBooking()}
              className=\"bg-[#FF7A00] hover:bg-[#E66E00] text-white rounded-full px-7 h-11 font-bold shadow-lg w-full sm:w-auto\"
              data-testid=\"footer-book-now-button\"
            >
              <Droplet size={16} className=\"mr-2\" /> {t(\"book_now\")}
            </Button>
            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className=\"mt-3 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-7 h-11 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold transition\"
              data-testid=\"footer-call-now-button\"
            >
              <Phone size={16} /> {t(\"call_now\")}
            </a>
          </div>
        </div>

        <div className=\"border-t border-white/10 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-100/60\">
          <p>© {new Date().getFullYear()} {t(\"brand_full\")}. {t(\"footer_rights\")}</p>
          <p className=\"flex items-center gap-1.5\">
            {t(\"footer_made\")} <Heart size={12} className=\"text-rose-400 fill-rose-400\" /> {t(\"footer_in_bhopal\")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"
