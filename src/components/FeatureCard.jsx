import { featureItems } from "../constants";
import styles from "../style";
const FeatureCard = () => {
  return (
    <>
      {featureItems.map((feature, index) => (
        <div
          key={index}
          className={`${styles.flexCenter} ${styles.cardBox} relative p-8 flex-col hover:bg-opacity-45 hover:border-0 h-[250px]`}
          /*           "relative flex flex-col items-center justify-center bg-p1 bg-opacity-15 border-2 border-p1 p-8 hover:bg-opacity-45 hover:border-0 w-[250px] h-[250px]" */
        >
          <img
            src={feature.image}
            alt={`Image of ${feature.title}`}
            className="h-[88px] w-[88px] object-contain"
          />
          <div className="text-center pt-3 font-playfair space-y-2">
            <p
              className={`${styles.title}`} /* className="font-bold text-p2 text-base lg:text-lg" */
            >
              {feature.title}
            </p>
            <p
              className={`${styles.description}`} /* className="font-normal text-p4 text-sm lg:text-base" */
            >
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureCard;
