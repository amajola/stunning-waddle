import AccountIcon from "../assets/Account";
import SupportIcon from "../assets/SupportIcon";
import TagIcon from "../assets/TagIcon";

function ProductInfoBanner() {
  return (
    <div className="flex items-center justify-center mt-8 md:mt-20">
      <div className="flex flex-col gap-6 md:flex-row lg:max-w-screen-xl w-full md:justify-around md:gap-0">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-2 md:w-20 md:h-20">
            <SupportIcon fill="white" />
          </div>
          <p className="font-bold text-sm md:text-lg">Product Support</p>
          <p className="max-w-64 text-xs text-center md:text-sm">
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-2 md:w-20 md:h-20">
            <AccountIcon fill="white" />
          </div>
          <p className="font-bold text-sm md:text-lg">Personal Account</p>
          <p className="max-w-64 text-xs text-center md:text-sm">
            With big discounts, free delivery and a dedicated support
            specialist.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-2 md:w-20 md:h-20">
            <TagIcon fill="white" />
          </div>
          <p className="font-bold text-sm md:text-lg">Amazing Savings</p>
          <p className="max-w-64 text-xs text-center md:text-sm">
            Up to 70% off new Products, you can be sure of the best price.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoBanner;
