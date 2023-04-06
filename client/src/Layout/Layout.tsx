import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderChat from "@/components/HeaderChat";


type LayoutProps = {
  children: ReactNode;
  showHeaderFooter?: boolean;
}
const Layout = ({ children, showHeaderFooter = false }: LayoutProps) => {
  return (
    <div className="max-w-8xl mx-auto">
      {showHeaderFooter && <Header />}
      {!showHeaderFooter && <HeaderChat />}

      <div className="min-h-[600px]">{children}</div>
      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;
