import logo from "../assets/logo.svg";
import { footerLinks, socialLinks } from "../constants";
import coffeeCup from "../assets/coffee_cup.png";
import styles from "../style";
const Footer = () => {
  return (
    <footer className="footer-bg relative">
      <div className="absolute flex w-full top-[-67px] lg:top-[-200px] md:top-[-150px] justify-between">
        <img
          src={coffeeCup}
          alt="coffee cup"
          className="w-28 md:w-40 lg:w-56 h-auto z-10"
        />
        <img
          src={coffeeCup}
          alt="coffee cup"
          className="w-28 md:w-40 lg:w-56 h-auto transform scale-x-[-1] z-10"
        />
      </div>
      <div className=" content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start max-w-md space-y-4">
          <img src={logo} alt="logo" width={270} height={71} />
          <p className="font-playfair text-white font-medium text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex justify-between gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={link.icon}
                  alt={link.title}
                  className="w-6 h-6 transition-transform transform hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
        {footerLinks.map((col, index) => (
          <div
            key={index}
            className="font-playfair text-left pl-0 lg:pl-12 pt-8"
          >
            <h3
              className={`${styles.title} pb-4 text-white`} /* "font-bold text-lg pb-4" */
            >
              {col.title}
            </h3>
            <ul className="space-y-2">
              {col.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
