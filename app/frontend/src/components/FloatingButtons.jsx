"import { Phone, MessageCircle } from \"lucide-react\";
import { CONTACT } from \"@/lib/translations\";

const FloatingButtons = () => {
  return (
    <div className=\"fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50 flex flex-col gap-3\" data-testid=\"floating-cta-buttons\">
      <a
        href={`https://wa.me/${CONTACT.whatsappIntl}?text=${encodeURIComponent(\"Hello Jal Amrit, I want to enquire about RO.\")}`}
        target=\"_blank\"
        rel=\"noreferrer\"
        className=\"group relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform\"
        data-testid=\"floating-whatsapp-button\"
        aria-label=\"WhatsApp Chat\"
      >
        <span className=\"absolute inset-0 rounded-full animate-ripple bg-[#25D366]/40\" aria-hidden />
        <MessageCircle size={24} className=\"relative z-10\" />
      </a>
      <a
        href={`tel:${CONTACT.phoneIntl}`}
        className=\"group w-14 h-14 rounded-full bg-[#0B3B60] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform\"
        data-testid=\"floating-call-button\"
        aria-label=\"Call Now\"
      >
        <Phone size={22} />
      </a>
    </div>
  );
};

export default FloatingButtons;
"
