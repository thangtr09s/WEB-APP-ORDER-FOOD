import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <div className="min-h-screen mx-auto max-w-7xl bg-[#2d2d2d] flex flex-col justify-between">
      <div className="sticky top-0 z-50 bg-[#2d2d2d]">
        <div className="max-w-[1080px] mx-auto">
          <Header />
        </div>
      </div>

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
