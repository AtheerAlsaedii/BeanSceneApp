import { Button, FeatureCard } from "../components";
import coffeeBlast from "../assets/coffee_blast.svg";
import styles, { layout } from "../style";

const Features = () => {
  return (
    <section className={`${styles.marginB}`}>
      <div className="absolute top-1/5 transform -translate-y-1/2 md:h-[200px] lg:h-[300px] max-w-[320px] w-auto right-0">
        <img
          src={coffeeBlast}
          alt="coffee blast"
          className="h-full object-contain transform scale-x-[-1]"
        />
      </div>
      <div
        className={`${layout.sectionCol} ${styles.paddingT}`}
        /*  className="container flex flex-col items-center justify-center space-y-2 px-6 lg:px-0 pt-24 lg:pt-16 md:pt-18 text-center" */
      >
        <h1 className={`${styles.heading1}`}>Why are we different?</h1>
        <p className={`${styles.paragraph}`}>
          We don’t just make your coffee, we make your day!
        </p>
        <div className={`${layout.cardWarp}`}>
          <FeatureCard />
        </div>
        <p className={`${styles.paragraph}`}>
          Great ideas start with great coffee, Lets help you achieve that
        </p>
        <p className="text-p2 font-bold text-lg lg:text-2xl">
          Get started today.
        </p>
        <Button
          text={"Join Us"}
          /*   properties={"inline-block text-sm md:text-base lg:text-lg"} */
        />
      </div>
    </section>
  );
};

export default Features;
