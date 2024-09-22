import BusinessInfoBanner from "./components/BusinessInfoBanner";
import Header from "./components/Header";
import banner from "./assets/Banner.png";
import bannerMobile from "./assets/Facebook post image.jpg";
import Products from "./components/Products";
import ProductInfoBanner from "./components/ProductInfoBanner";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    // Check on initial load
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <BusinessInfoBanner />
      <Header />
      <div className="flex items-center justify-center">
        <img
          src={isMobile ? bannerMobile : banner}
          alt="Promotion banner image"
          className="lg:max-w-screen-xl h-80 w-full"
        />
      </div>
      <Products category="jewelery" limit={3} />
      <Products />
      <ProductInfoBanner />

      <Footer />
    </>
  );
}

export default App;
