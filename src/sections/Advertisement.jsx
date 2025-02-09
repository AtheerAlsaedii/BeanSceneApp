import cup from "../assets/cup.png";
import bean from "../assets/beanbackground.svg";
import { Button } from "../components";
import styles from "../style";
const Advertisement = () => {
  return (
    <section className={`${styles.marginB} relative bg-image2`}>
      <div className="flex flex-row justify-around items-center">
        <div
          className={`${styles.textDirection} ${styles.paddingY} ${styles.paddingX} lg:max-w-lg max-w-sm space-y-4`}
        >
          <h2 className="font-playfair text-white font-bold lg:text-4xl md:text-3xl">
            Get a chance to have an Amazing morning
          </h2>
          <p className={`${styles.paragraph} text-white`}>
            We are giving you are one time opportunity to experience a better
            life with coffee.
          </p>
          <Button
            text={"Order Now"}
            // properties={"text-xs md:text-sm lg:text-lg"}
          />
        </div>
        <img
          src={cup}
          alt="cup of coffee"
          className="lg:w-[300px] lg:h-[430px] md:w-[270px] md:h-[430px] hidden sm:block z-20"
        />
      </div>
      <div className="absolute bottom-0 right-0 z-0 hidden sm:block">
        <img
          src={bean}
          alt="coffee blast"
          className="object-cover lg:w-[450px] lg:h-[380px] md:w-[430px] md:h-[350px]"
        />
      </div>
    </section>
  );
};

export default Advertisement;
