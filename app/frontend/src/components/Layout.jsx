"import { Outlet, useLocation } from \"react-router-dom\";
import { useEffect } from \"react\";
import Header from \"@/components/Header\";
import Footer from \"@/components/Footer\";
import FloatingButtons from \"@/components/FloatingButtons\";

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: \"instant\" });
  }, [pathname]);

  return (
    <div className=\"min-h-screen flex flex-col bg-white\">
      <Header />
      <main className=\"flex-1\" data-testid=\"page-main\">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
"
