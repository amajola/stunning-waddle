import MarkdownText from "./FormatText";

function BusinessInfoBanner() {
  return (
    <>
      <div className="w-full bg-black flex items-start flex-col gap-2 p-2 lg:flex-row justify-around">
        <p className="text-xs text-white font-poppins md:text-sm">
          <MarkdownText text="_Mon-Thu:_ 9:00 AM - 5:30 PM" />
        </p>
        <p className="text-xs text-white font-poppins md:text-sm">
          <MarkdownText text="_Visit our showroom in 1234 Street Adress City Address, 1234_ Contact Us" />
        </p>
        <p className="text-xs text-white font-poppins md:text-sm">
          Call Us: (00) 1234 5678
        </p>
      </div>
    </>
  );
}

export default BusinessInfoBanner;
