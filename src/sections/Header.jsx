import { AlignJustify, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { Button, Navbar } from "../components";

const Header = () => {
  const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setmobileDrawerOpen((prevState) => !prevState);
  };
  return (
    <header className="bg-transparent absolute w-full z-50 py-3 text-white ">
      <div className="container mx-auto px-10">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" width={115} height={55} />
          <div>
            <Navbar
              liProperties={"text-14"}
              ulProperties={"hidden lg:flex space-x-12"}
            />
          </div>
          <div className="hidden lg:flex space-x-5 items-center font-playfair text-14">
            <a
              href="#"
              className="underline transition-all duration-300 hover:scale-110"
            >
              Sign In
            </a>
            <Button text={"Sign Up"} properties={"text-sm font-normal"} />
          </div>
          {/* menu for small device */}
          <div className="lg:hidden md:flex">
            <button
              onClick={toggleNavbar}
              className="text-white"
              aria-label={mobileDrawerOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileDrawerOpen ? <X size={25} /> : <AlignJustify size={25} />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="bg-p2 bg-opacity-95 rounded-lg shadow-lg lg:hidden flex flex-col justify-center items-center mt-5 w-full h-4/6 fixed right-0 z-20">
            <Navbar liProperties={"py-4 text-center text-sm"} />
            <div className="flex space-x-6 font-playfair text-sm">
              <a
                href="#"
                className="underline py-3 transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                Sign In
              </a>
              <Button text={"Sign Up"} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
