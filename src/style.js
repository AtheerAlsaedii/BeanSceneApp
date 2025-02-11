const styles = {
  heading1: "font-playfair font-bold text-p2 text-2xl lg:text-4xl",
  paragraph: "font-playfair font-light text-p4 text-sm lg:text-lg",
  title: "font-playfair font-bold text-p2 text-lg lg:text-xl",
  description: "font-playfair text-p4 font-normal lg:text-base text-sm",

  textDirection: "md:text-left text-center",

  flexCenter: "flex justify-center items-center",

  paddingX: "md:px-8 px-10",
  paddingY: "md:py-8 py-10",
  paddingT: "pt-24 lg:pt-16 md:pt-18",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginB: "md:mb-8 mb-5",

  cardBox: "bg-p1 bg-opacity-15 border-2 border-p1 w-[250px]",
  coffeeImage: "h-full object-contain transform",
  coffeeImgSize: "md:h-[200px] lg:h-[300px] w-auto",
  coffeeTranslate: "absolute transform -translate-y-1/2",
};

export const layout = {
  sectionCol: `flex flex-col space-y-4 ${styles.flexCenter} ${styles.paddingX} text-center`,
  cardWarp: `${styles.flexCenter} ${styles.paddingY} flex-wrap lg:gap-5 gap-8`,
};

export default styles;
