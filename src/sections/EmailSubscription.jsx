import styles, { layout } from "../style";

const EmailSubscription = () => {
  return (
    <section className="relative bg-image2 mt-16">
      <div className={`${layout.sectionCol} py-10 gap-3`}>
        <h1 className={`${styles.heading1} text-white`}>
          Subscribe to get the Latest News
        </h1>
        <p className={`${styles.paragraph} text-white`}>
          Don’t miss out on our latest news, updates, tips and special offers
        </p>
        <div className="flex flex-col md:flex-row p-4 w-[90%] max-w-xl mx-auto space-y-2 md:space-y-0 z-20">
          <input
            type="email"
            placeholder="Enter your mail"
            className="flex-1 p-3 border border-gray-300 border-r-0 rounded-sm md:rounded-l-sm md:rounded-r-none  focus:outline-none focus:ring-2 focus:ring-blue-500 h-12"
          />
          <button className="bg-p1 font-playfair text-p2 font-bold px-4 py-3 border-l-0 rounded-sm md:rounded-r-sm md:rounded-l-none  hover:text-white h-12">
            Suscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailSubscription;
