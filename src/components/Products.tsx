import MarkdownText from "./FormatText";
import TickIcon from "../assets/TickIcon";
import PhoneIcon from "../assets/PhoneIcon";
import StarIcon from "../assets/StarIcon";
import { ProductInterface, useFetchProductsQuery } from "../api/products";
import {
  capitalizeWords,
  getStarPercentages,
  truncateDescription,
} from "../utils/product";
import { useDispatch } from "react-redux";
import { addToCart, AppDispatch } from "../store";
import Loader from "./Loader";
import "../App.css";
import ErrorScreen from "./Error";

interface ProductsDisplayInterface {
  category?: string;
  limit?: number;
}

function Products({ category = "", limit = 20 }: ProductsDisplayInterface) {
  const {
    data: products,
    error,
    isLoading,
  } = useFetchProductsQuery({ category, limit });
  const dispatch = useDispatch<AppDispatch>();

  if (isLoading)
    return (
      <div className="p-10">
        <Loader size="md" color="blue" />;
      </div>
    );
  if (error) return <ErrorScreen />;
  if (!products) return <div>No data</div>;

  console.log(products);

  const handleAddToCart = (product: ProductInterface) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="mt-8 md:mt-16 px-4 flex flex-col justify-center items-center">
        <h3 className="font-semibold text-lg w-full lg:max-w-screen-xl">
          {category ? capitalizeWords(category) : "All Products"}
        </h3>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-product gap-4 mt-4 lg:max-w-screen-xl w-full items-baseline">
          {products &&
            products.map((element) => {
              return (
                <div className="mt-4 flex p-8 h-full" key={element.id}>
                  <div className="flex flex-col justify-around gap-5">
                    <div className="flex flex-row items-center">
                      {element.inStock ? (
                        <>
                          <div className="w-5 h-5 bg-green-600 rounded-full mr-2 flex flew-row items-center justify-center md:w-6 md:h-6">
                            <TickIcon width={10} height={10} />
                          </div>
                          <p className="text-green-500">In stock</p>
                        </>
                      ) : (
                        <>
                          <div className="w-5 h-5 bg-warning rounded-full mr-2 flex flew-row items-center justify-center md:w-6 md:h-6">
                            <PhoneIcon className="w-3 h-3 md:w-4 md:h-4" />
                          </div>
                          <p className="text-warning">Check availability</p>
                        </>
                      )}
                    </div>
                    <div className="flex justify-center">
                      <img
                        src={element.image}
                        alt="My Custom Image"
                        className="h-60 w-1/2 object-scale-down"
                      />
                    </div>
                    <div className="flex flex-row items-center">
                      <div className="flex flex-row mr-3 gap-1">
                        {getStarPercentages(element.rating.rate).map(
                          (element) => (
                            <StarIcon
                              key={Math.random()}
                              fillPercentage={element}
                              className="w-4 h-4 md:h-6 md:w-6"
                              fill="#E9A426"
                            />
                          )
                        )}
                      </div>
                      <p>
                        <MarkdownText
                          text={`_Reviews (${element.rating.count})_`}
                        />
                      </p>
                    </div>
                    <p>{truncateDescription(element.description, 300)}</p>
                    <div className="flex flex-row justify-between items-center">
                      <p className="text-lg font-semibold">{`$${element.price}`}</p>
                      <button
                        onClick={() => handleAddToCart(element)}
                        className="bg-blue-600 p-3 rounded-md grow-button"
                      >
                        <p className="text-white">Add To Cart</p>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Products;
