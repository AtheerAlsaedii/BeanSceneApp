import { useState } from "react";
import { TestimonialsCard } from "../components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { TestimonialItems } from "../constants";
import coffeeBlast from "../assets/coffee_blast.svg";
import styles, { layout } from "../style";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TestimonialItems.length - 1 : prev - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === TestimonialItems.length - 1 ? 0 : prev + 1
    );
  };
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    delta: 50,
  });
  return (
    <section className={`${styles.marginB} relative`}>
      <div className={`${layout.sectionCol}`}>
        <h1 className={`${styles.heading1}`}>Our coffee perfection feedback</h1>
        <p className={`${styles.paragraph}`}>
          Our customers has amazing things to say about us
        </p>
        <div
          className={`${styles.flexCenter} relative`}
          {...(isTouchDevice ? swipeHandlers : {})}
        >
          <button
            onClick={handlePrev}
            className="absolute left-16 bg-p1 text-white rounded-lg p-3 hover:bg-opacity-80 hidden lg:flex"
          >
            <ChevronLeft size={24} />
          </button>
          <TestimonialsCard testimonial={TestimonialItems[currentIndex]} />
          <button
            onClick={handleNext}
            className="absolute right-16 bg-p1 text-white rounded-lg p-3 hover:bg-opacity-80 hidden lg:flex"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div
        className={`${styles.coffeeImgSize} ${styles.coffeeTranslate} top-14 max-w-[370px] right-0 md:flex hidden`}
      >
        <img
          src={coffeeBlast}
          alt="coffee blast"
          className={`${styles.coffeeImage} scale-x-[-1]`}
        />
      </div>
      <div
        className={`${styles.coffeeImgSize} ${styles.coffeeTranslate} bottom-0 translate-y-28 max-w-[370px] left-0 md:flex hidden`}
      >
        <img
          src={coffeeBlast}
          alt="coffee blast"
          className={`${styles.coffeeImage} scale-y-[-1]`}
        />
      </div>
    </section>
  );
};

export default Testimonials;
