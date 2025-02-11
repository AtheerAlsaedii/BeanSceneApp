import { AlignJustify, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import { Button } from "../components";
import { navItems } from "../constants";
import clsx from "clsx";

const Header = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prevState) => !prevState);
  };
  const handleClick = () => {
    setMobileDrawerOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (mobileDrawerOpen) {
        setMobileDrawerOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileDrawerOpen]);
  return (
    <header className="bg-transparent absolute w-full z-50 py-3 text-white ">
      <div className="container mx-auto px-10">
        <div className="flex justify-between items-center">
          <img src={logo} alt="logo" width={115} height={55} />
          <ul className="hidden lg:flex space-x-12">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="font-playfair text-14 transition-all duration-300 hover:scale-110 hover:text-p1 cursor-pointer"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-5 items-center font-playfair text-14">
            <a
              href="#"
              className="underline transition-all duration-300 hover:scale-110 hover:text-p1"
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
          <div
            className={clsx(
              "bg-p2 bg-opacity-95 rounded-lg shadow-lg lg:hidden flex flex-col justify-center items-center mt-5 w-full h-4/6 fixed right-0 z-20 transition-all duration-500 ease-in-out",
              {
                "transform translate-x-0 opacity-100": mobileDrawerOpen,
                "transform translate-x-full opacity-0": !mobileDrawerOpen,
              }
            )}
          >
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="py-4 text-center text-sm font-playfair transition-all duration-300 hover:scale-110 hover:text-p1 cursor-pointer"
                >
                  <a href={item.href} onClick={handleClick}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 font-playfair text-sm">
              <a
                href="#"
                className="underline py-3 transition-all duration-300 hover:scale-110 hover:text-p1 cursor-pointer"
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
