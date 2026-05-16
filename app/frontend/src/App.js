"import \"@/App.css\";
import { BrowserRouter, Routes, Route } from \"react-router-dom\";
import { LangProvider } from \"@/contexts/LangContext\";
import { BookingProvider } from \"@/contexts/BookingContext\";
import Layout from \"@/components/Layout\";
import Home from \"@/pages/Home\";
import Products from \"@/pages/Products\";
import Services from \"@/pages/Services\";
import About from \"@/pages/About\";
import WhyPureWater from \"@/pages/WhyPureWater\";
import { Toaster } from \"@/components/ui/sonner\";

function App() {
  return (
    <div className=\"App\">
      <LangProvider>
        <BookingProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path=\"/\" element={<Home />} />
                <Route path=\"/products\" element={<Products />} />
                <Route path=\"/services\" element={<Services />} />
                <Route path=\"/about\" element={<About />} />
                <Route path=\"/why-pure-water\" element={<WhyPureWater />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster position=\"top-center\" richColors />
        </BookingProvider>
      </LangProvider>
    </div>
  );
}

export default App;
"
