import { clsx } from "clsx";
import { navItems } from "../constants";
import PropTypes from "prop-types";

const Navbar = ({ ulProperties, liProperties }) => (
  <ul className={ulProperties}>
    {navItems.map((item, index) => (
      <li
        key={index}
        className={clsx(
          "font-playfair transition-all duration-300 hover:scale-110 hover:text-p1 cursor-pointer",
          liProperties
        )}
      >
        <a href={item.href}>{item.label}</a>
      </li>
    ))}
  </ul>
);
Navbar.propTypes = {
  ulProperties: PropTypes.string,
  liProperties: PropTypes.string,
};
export default Navbar;
