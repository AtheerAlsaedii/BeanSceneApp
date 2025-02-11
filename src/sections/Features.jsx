import { Button, FeatureCard } from "../components";
import coffeeBlast from "../assets/coffee_blast.svg";
import styles, { layout } from "../style";

const Features = () => {
  return (
    <section className={`${styles.marginB}`} id="features">
      <div
        className={`${styles.coffeeImgSize} ${styles.coffeeTranslate} top-1/5 max-w-[320px] right-0`}
      >
        <img
          src={coffeeBlast}
          alt="coffee blast"
          className={`${styles.coffeeImage} scale-x-[-1]`}
        />
      </div>
      <div className={`${layout.sectionCol} ${styles.paddingT}`}>
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
        <Button text={"Join Us"} />
      </div>
    </section>
  );
};

export default Features;
