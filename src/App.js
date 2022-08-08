import HeroSection from "./components/hero-section/Hero-section";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
// import Testimonials from "./components/testimonials/Testimonials";

import "./App.scss";

function App() {
  return (
    <div>
      <HeroSection />
      <About />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
