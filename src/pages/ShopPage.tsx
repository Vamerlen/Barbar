
import React from "react";
import Navbar from "@/components/Navbar";
import Shop from "@/components/Shop";
import Footer from "@/components/Footer";
import { ArrowUp } from "lucide-react";

const ShopPage = () => {
  const [showScrollToTop, setShowScrollToTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Shop />
      <Footer />

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 p-3 bg-barber-gold text-white rounded-full shadow-lg z-50 hover:bg-barber-gold/90 transition-all ${
          showScrollToTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ShopPage;
