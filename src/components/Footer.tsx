function Footer() {
  return (
    <>
      <div className="w-full bg-black mt-11 p-4 grid grid-cols-2 gap-10 md:flex md:justify-evenly md:h-60 items-center">
        <div>
          <h3 className="text-white font-bold">Information</h3>
          <p className="text-white font-light">About Us</p>
          <p className="text-white font-light">Privacy Policy</p>
        </div>
        <div>
          <h3 className="text-white font-bold">My Account</h3>
          <p className="text-white font-light">Login</p>
          <p className="text-white font-light">Sign Up</p>
        </div>
        <div>
          <h3 className="text-white font-bold">Support</h3>
          <p className="text-white font-light">FAQS</p>
          <p className="text-white font-light">Customer Service</p>
        </div>
        <div>
          <h3 className="text-white font-bold">Other</h3>
          <p className="text-white font-light">Cookies</p>
          <p className="text-white font-light">Resources</p>
        </div>
        <div className="col-span-2">
          <h3 className="text-white font-bold">Address</h3>
          <p className="text-white font-light">Address: 1234 Street ,Address City Address, 1234</p>
          <a className="text-blue-400 font-light" href="tel:(00) 1234 5678">(00) 1234 5678</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
