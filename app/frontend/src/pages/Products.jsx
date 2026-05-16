"import { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";
import { Home as HomeIcon, Building2, Cog, Wrench } from \"lucide-react\";
import { useLang } from \"@/contexts/LangContext\";
import { PRODUCTS } from \"@/data/products\";
import ProductCard from \"@/components/ProductCard\";

const Products = () => {
  const { t } = useLang();

  const tabs = [
    { id: \"domestic_branded\", label: t(\"tab_dom_branded\"), icon: HomeIcon, desc: \"Top brands like Kent, Aquaguard, Pureit, Livpure for your home.\" },
    { id: \"domestic_assembled\", label: t(\"tab_dom_assembled\"), icon: Wrench, desc: \"Our own Jal Amrit assembled ROs — premium quality, value pricing.\" },
    { id: \"commercial_branded\", label: t(\"tab_com_branded\"), icon: Building2, desc: \"Heavy-duty branded plants for offices, restaurants & hotels.\" },
    { id: \"commercial_assembled\", label: t(\"tab_com_assembled\"), icon: Cog, desc: \"Custom-built Jal Amrit commercial ROs from 50 LPH to 500 LPH.\" },
  ];

  return (
    <div data-testid=\"products-page\">
      <section className=\"bg-water-grad pt-14 pb-12 lg:pt-20 lg:pb-16 relative overflow-hidden\">
        <div className=\"absolute -top-12 -right-12 w-72 h-72 bg-[#00A3E0]/20 rounded-full blur-3xl\" />
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative\">
          <div className=\"text-xs font-bold uppercase tracking-[0.25em] text-[#00A3E0]\">RO Catalog</div>
          <h1 className=\"mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B3B60]\">{t(\"products_title\")}</h1>
          <p className=\"mt-3 text-lg text-slate-600 max-w-2xl\">{t(\"products_subtitle\")}</p>
        </div>
      </section>

      <section className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20\">
        <Tabs defaultValue=\"domestic_branded\">
          <TabsList className=\"flex flex-wrap h-auto bg-[#F4F9FF] p-2 rounded-2xl gap-2 w-full justify-start\" data-testid=\"products-tabs\">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className=\"flex-1 min-w-[140px] data-[state=active]:bg-[#0B3B60] data-[state=active]:text-white data-[state=active]:shadow-lg rounded-xl px-4 py-3 font-semibold text-sm\"
                data-testid={`products-tab-${tab.id}`}
              >
                <tab.icon size={16} className=\"mr-1.5\" /> {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className=\"mt-8\">
              <p className=\"text-slate-600 max-w-2xl mb-8\">{tab.desc}</p>
              <div className=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6\" data-testid={`products-grid-${tab.id}`}>
                {PRODUCTS[tab.id].map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  );
};

export default Products;
"
