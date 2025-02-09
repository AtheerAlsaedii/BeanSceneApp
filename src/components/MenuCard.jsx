import { menuItems } from "../constants";
import styles from "../style";
import Button from "./Button";

const MenuCard = () => {
  return (
    <>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.flexCenter} relative flex-col`}>
          <img
            src={item.image}
            alt={`Image of ${item.title}`}
            className="h-[202px] w-[250px] object-cover"
          />
          <div
            className={`${styles.cardBox} space-y-2 pt-4 pb-8 border-t-0`}>
            <p className={`${styles.title}`}>{item.title}</p>
            <p className={`${styles.description}`}>{item.description}</p>
            <p className="font-playfair font-bold text-p2 text-base lg:text-lg">
              ${item.price}
            </p>
            <Button
              text={"Order Now"}
              properties={
                "absolute bottom-[calc(-1rem)] left-1/2 transform -translate-x-1/2 text-xs lg:text-sm"
              }
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuCard;
