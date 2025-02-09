import { clsx } from "clsx";
import { navItems } from "../constants";

const Navbar = ({ ulProperties, liProperties }) => (
  <ul className={ulProperties}>
    {navItems.map((item, index) => (
      <li
        key={index}
        className={clsx(
          "font-playfair transition-all duration-300 hover:scale-110 cursor-pointer",
          liProperties
        )}
      >
        <a href={item.href}>{item.label}</a>
      </li>
    ))}
  </ul>
);
export default Navbar;
