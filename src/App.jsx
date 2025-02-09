import {
  AboutUs,
  Advertisement,
  EmailSubscription,
  Features,
  Footer,
  Header,
  Hero,
  Menu,
  Testimonials,
} from "./sections";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Menu />
      <Features />
      <Advertisement />
      <Testimonials />
      <EmailSubscription />
      <Footer />
    </main>
  );
};

export default App;
