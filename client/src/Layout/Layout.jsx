import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <div className="  max-w-7xl mx-auto">
      <Header />
      <div className="min-h-[600px] ">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
