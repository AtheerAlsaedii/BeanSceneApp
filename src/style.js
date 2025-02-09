const styles = {
  heading1: "font-playfair font-bold text-p2 text-2xl lg:text-4xl",
  paragraph: "font-playfair font-light text-p4 text-sm lg:text-lg",
  title: "font-playfair font-bold text-p2 text-lg lg:text-xl",
  description: "font-playfair text-p4 font-normal lg:text-base text-sm",

  textDirection: "md:text-left text-center",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "md:px-8 px-10",
  paddingY: "md:py-8 py-10",
  paddingT: "pt-24 lg:pt-16 md:pt-18",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginB: "md:mb-8 mb-5",
  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  cardBox: "bg-p1 bg-opacity-15 border-2 border-p1 w-[250px]",
};

export const layout = {
  sectionCol: `flex flex-col space-y-4 ${styles.flexCenter} ${styles.paddingX} text-center`,
  cardWarp: `${styles.flexCenter} ${styles.paddingY} flex-wrap lg:gap-5 gap-8`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
