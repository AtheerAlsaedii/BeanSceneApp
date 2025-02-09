import clsx from "clsx";
import PropTypes from "prop-types";

const Button = ({ text, properties }) => {
  return (
    <button
      className={clsx(
        "inline-block bg-p1 py-3 px-6 rounded-full shadow-md hover:shadow-p1 text-p2 font-playfair font-semibold text-xs md:text-sm lg:text-lg z-50",
        properties
      )}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  properties: PropTypes.string,
};
export default Button;

/* inline-block text-xs md:text-sm lg:text-lg
inline-block text-xs md:text-sm lg:text-lg
text-xs md:text-sm lg:text-lg
absolute bottom-[calc(-1rem)] left-1/2 transform -translate-x-1/2 text-xs sm:text-sm lg:text-sm
inline-block text-sm md:text-base lg:text-lg */
