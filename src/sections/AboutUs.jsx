import bean from "../assets/bean.jpg";
import { Button } from "../components";
import styles from "../style";

const AboutUs = () => {
  return (
    <section className={`${styles.marginB}`}>
      <div
        className={`${styles.paddingX} ${styles.paddingY} container flex flex-col items-center justify-around md:flex-row-reverse gap-5`}
      >
        <img
          src={bean}
          alt="bean"
          className="max-w-full w-60 lg:w-96 md:w-72 h-auto object-contain"
        />
        <div
          className={`${styles.textDirection} space-y-4 md:space-y-8 max-w-lg`}
        >
          <h1 className={`${styles.heading1}`}>Discover the best coffee</h1>
          <p className={`${styles.paragraph}`}>
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <Button
            text={"Learn More"}
            // properties={"inline-block text-xs md:text-sm lg:text-lg"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
