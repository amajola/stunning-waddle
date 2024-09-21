import BusinessInfoBanner from "./components/BusinessInfoBanner";
import Header from "./components/Header";
import banner from "./assets/Banner.png";
import Products from "./components/Products";
import ProductInfoBanner from "./components/ProductInfoBanner";
import Footer from "./components/Footer";
import { useFetchAllCategoriesQuery } from "./api/products";

function App() {
  const { data: categories } = useFetchAllCategoriesQuery();
  console.log(categories);

  return (
    <>
      <BusinessInfoBanner />
      <Header />
      <div className="flex items-center justify-center">
        <img
          src={banner}
          alt="My Custom Image"
          className="lg:max-w-screen-xl h-80"
        />
      </div>
      {/* {categories?.map((element) => (
        <Products category={element} limit={3} key={element} />
        ))} */}
      <Products category="jewelery" limit={3} />
      <Products />
      <ProductInfoBanner />
      <Footer />
    </>
  );
}

export default App;
