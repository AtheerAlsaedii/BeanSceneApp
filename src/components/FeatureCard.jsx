import { featureItems } from "../constants";
import styles from "../style";
const FeatureCard = () => {
  return (
    <>
      {featureItems.map((feature, index) => (
        <div
          key={index}
          className={`${styles.flexCenter} ${styles.cardBox} relative p-8 flex-col hover:bg-opacity-45 hover:border-0 h-[250px]`}
        >
          <img
            src={feature.image}
            alt={`Image of ${feature.title}`}
            className="h-[88px] w-[88px] object-contain"
          />
          <div className="text-center pt-3 font-playfair space-y-2">
            <p className={`${styles.title}`}>{feature.title}</p>
            <p className={`${styles.description}`}>{feature.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureCard;
