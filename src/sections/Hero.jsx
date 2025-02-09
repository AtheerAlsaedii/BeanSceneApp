import { Button } from "../components";
import styles from "../style";

const Hero = () => {
  return (
    <section className={`${styles.marginB} hero-bg relative`}>
      <div className="container overflow-hidden bg-slate-100">
        <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2">
          <div
            className={`${styles.paddingX} ${styles.textDirection} text-white space-y-3 max-w-lg md:pl-10`}
          >
            <p className="font-playfair font-medium text-base lg:text-2xl">
              We’ve got your morning covered with
            </p>
            <h1 className="font-clicker lg:text-9xl md:text-8xl text-7xl">
              Coffee
            </h1>
            <p
              className={`${styles.paragraph} text-white`} /* className="font-normal text-xs md:text-sm lg:text-lg" */
            >
              It is best to start your day with a cup of coffee. Discover the
              best flavours coffee you will ever have. We provide the best for
              our customers.
            </p>
            <Button
              text={"Order Now"}
              /*         properties={"inline-block text-xs md:text-sm lg:text-lg"} */
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
