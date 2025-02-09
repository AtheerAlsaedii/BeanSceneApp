import PropTypes from "prop-types";
import quoteMark from "../assets/quote_mark.png";
import styles from "../style";

const TestimonialsCard = ({ testimonial }) => {
  return (
    <div
      className={`${styles.cardBox} relative flex flex-col justify-around items-center w-[80%] max-w-[950px] lg:h-[450px] md:h-[400px] h-[350px] p-6`}
    >
      <p
        className={`${styles.description} pt-16 md:line-clamp-none line-clamp-4`}
      >
        {testimonial.description}
      </p>
      <div>
        <p className={`${styles.title}`}>{testimonial.name}</p>
        <p className={`${styles.description}`}>{testimonial.job}</p>
      </div>
      <div>
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-[112px] h-[112px] rounded-[16px] absolute bottom-[calc(-3rem)] left-1/2 transform -translate-x-1/2"
        />
      </div>
      <img
        src={quoteMark}
        alt="quote mark"
        className=" absolute object-contain left-10 top-8 md:w-[10%] w-[15%]"
      />
    </div>
  );
};

TestimonialsCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    job: PropTypes.string,
  }).isRequired,
};
export default TestimonialsCard;
