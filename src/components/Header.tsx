import { useEffect, useMemo, useRef, useState } from "react";
import BasketIcon from "../assets/BasketIcon";
import CloseIcon from "../assets/CloseIcon";
import CompanyLogo from "../assets/CompanyLogo";
import MarkdownText from "./FormatText";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, CartItem, removeFromCart, RootState } from "../store";
import useRootScrollLock from "../hooks/ScrollLock";
import "../App.css";

function Header() {
  const cartRef = useRef<HTMLDivElement>(null);
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const cartTotal = useMemo(
    () =>
      cartItems
        .reduce(
          (reducer, element) => element.price * element.quantity + reducer,
          0
        )
        .toFixed(2),
    [cartItems]
  );

  const handleRemoveFromCart = (product: CartItem) => {
    dispatch(removeFromCart(product.id));
  };

  useRootScrollLock({ isLocked: showCart });
  const numProducts = cartItems.reduce((reducer, element) => {
    return element.quantity + reducer;
  }, 0);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setShowCart(false);
      }
    }

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);

  return (
    <div className="h-20 flex flex-col justify-center items-center border-b-2 border-solid	border-border-grey sticky top-0 bg-white">
      <div className="flex flex-row items-center justify-between px-5 md:px-9 lg:p-11 xl:px-0 md:h-20 max-w-screen-xl w-full">
        <div className="flex flex-row items-center">
          <CompanyLogo />
          <h1 className="font-poppins font-semibold	">OurCommerce</h1>
        </div>
        <div className="relative inline-flex items-center">
          <button
          className="w-10 h-10"
            onClick={() => {
              setShowCart(!showCart);
            }}
          >
            <BasketIcon />
          </button>

          <div
            className={`${showCart ? "flex" : "hidden"} header`}
            ref={cartRef}
          >
            <div className="absolute -top-2 right-4 w-4 h-4 bg-white border-t-[2px] border-l-[2px] border-border-grey transform rotate-45"></div>

            <div className="flex flex-row justify-between px-4 w-full">
              <div className="flex flex-col self-start px-4">
                <h2 className="font-semibold text-lg">My Cart</h2>
                <p className="font-poppins">
                  <MarkdownText text={`_${cartItems.length} item in cart_`} />
                </p>
              </div>
              <button
                className="w-5 h-5 rounded-full self-start"
                onClick={() => setShowCart(false)}
              >
                <CloseIcon fillout="#C94D3F" fillin="#C94D3F" />
              </button>
            </div>
            <div className="border-b-[1px] border-solid border-border-grey overflow-auto max-h-[50dvh]">
              {cartItems.map((element) => (
                <div
                  key={element.id}
                  className="flex items-center justify-evenly py-4 border-t-[1px] border-solid border-border-grey px-4 w-full"
                >
                  <h2>{`${element.quantity} x`}</h2>
                  <div className="w-[20%] flex justify-center">
                    <img
                      src={element.image}
                      alt="My Custom Image"
                      className="w-[50%] h-full object-scale-down"
                    />
                  </div>
                  <p className="text-sm max-w-[40%]">
                    {`${element.description.slice(0, 40)}...`}
                  </p>
                  <button
                    className="w-5 h-5 rounded-full self-start"
                    onClick={() => {
                      handleRemoveFromCart(element);
                    }}
                  >
                    <CloseIcon fillout="#CACDD8" fillin="#A2A6B0" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-row gap-1 self-end px-4">
              <p className="font-semibold font-poppins">
                <MarkdownText text="_Subtotal:_" />
              </p>
              <p className="font-poppins font-semibold">${cartTotal}</p>
            </div>
          </div>

          <div className="absolute left-4 top-0 bottom-3 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs md:w-5 md:h-5">
            <p className="text-white text-[0.60rem] md:text-[0.8em]">
              {numProducts}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
