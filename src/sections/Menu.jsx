import { MenuCard } from "../components";
import coffeeBlast from "../assets/coffee_blast.svg";
import styles, { layout } from "../style";

const Menu = () => {
  return (
    <section className={`${styles.marginB} relative`}>
      <div className="absolute top-1/5 transform -translate-y-1/2 md:h-[200px] lg:h-[300px] w-auto max-w-[320px]">
        <img
          src={coffeeBlast}
          alt="coffee blast"
          className="h-full object-contain"
        />
      </div>
      <div
        className={`${layout.sectionCol} ${styles.paddingT}`}
        /*   className={`${styles.flexCenter} 
        container 
        pb-6 pt-24 lg:pt-18 md:pt-18 px-6 lg:px-16 flex-col text-center space-y-2`} */
      >
        <h1 className={`${styles.heading1}`}>
          Enjoy a new blend of coffee style
        </h1>
        <p className={`${styles.paragraph} font-extralight`}>
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing
        </p>
        <div
          className={`${layout.cardWarp}`}
          /* className="flex flex-wrap justify-center lg:gap-5 gap-8 py-8 px-3 overflow-hidden" */
        >
          <MenuCard />
        </div>
      </div>
    </section>
  );
};

export default Menu;
