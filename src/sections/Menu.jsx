import { MenuCard } from "../components";
import coffeeBlast from "../assets/coffee_blast.svg";
import styles, { layout } from "../style";

const Menu = () => {
  return (
    <section className={`${styles.marginB} relative`} id="menu">
      <div
        className={`${styles.coffeeImgSize} ${styles.coffeeTranslate} top-1/5 max-w-[320px]`}
      >
        <img
          src={coffeeBlast}
          alt="coffee blast"
          className={`${styles.coffeeImage}`}
        />
      </div>
      <div className={`${layout.sectionCol} ${styles.paddingT}`}>
        <h1 className={`${styles.heading1}`}>
          Enjoy a new blend of coffee style
        </h1>
        <p className={`${styles.paragraph} font-extralight`}>
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>
        <div className={`${layout.cardWarp}`}>
          <MenuCard />
        </div>
      </div>
    </section>
  );
};

export default Menu;
