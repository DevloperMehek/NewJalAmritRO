"import { createContext, useContext, useState, useMemo, useCallback } from \"react\";
import { translations } from \"@/lib/translations\";

const LangContext = createContext({ lang: \"en\", setLang: () => {}, t: (k) => k });

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(\"en\");

  const t = useCallback(
    (key) => {
      const dict = translations[lang] || translations.en;
      return dict[key] ?? translations.en[key] ?? key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
"
