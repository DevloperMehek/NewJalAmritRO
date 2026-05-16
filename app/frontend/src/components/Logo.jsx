"import { Droplet } from \"lucide-react\";

export const Logo = ({ size = \"md\", showText = true }) => {
  const dim = size === \"lg\" ? \"w-12 h-12\" : size === \"sm\" ? \"w-8 h-8\" : \"w-10 h-10\";
  const text = size === \"lg\" ? \"text-2xl\" : \"text-xl\";
  return (
    <div className=\"flex items-center gap-2.5\" data-testid=\"brand-logo\">
      <div
        className={`relative ${dim} rounded-2xl flex items-center justify-center shrink-0`}
        style={{
          background: \"linear-gradient(135deg,#0B3B60 0%,#00A3E0 100%)\",
          boxShadow: \"0 6px 20px -6px rgba(0,163,224,0.55)\",
        }}
      >
        <Droplet className=\"text-white\" strokeWidth={2.2} size={size === \"lg\" ? 24 : 20} fill=\"white\" />
        <span
          className=\"absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white\"
          aria-hidden
        />
      </div>
      {showText && (
        <div className=\"leading-tight\">
          <div className={`font-display font-extrabold ${text} text-[#0B3B60]`}>
            जल <span className=\"text-[#00A3E0]\">Amrit</span>
          </div>
          <div className=\"text-[10px] tracking-[0.18em] text-slate-500 font-semibold uppercase\">
            RO Sales & Service
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
"
