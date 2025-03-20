import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Admissions from "./Components/Admissions";
import Academics from "./Components/Academics";
import Events from "./Components/Events";
import Newsletter from "./Components/NewsLetter";
import Contact from "./Components/Contact";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-between">
      {/* page header */}
      <Header />

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <About />

      {/* ADMISSION SECTION */}
      <Admissions />

      {/* ACADEMICS */}
      <Academics />

      {/* EVENTS */}
      <Events />

      {/* NEWSLETTER */}
      <Newsletter />

      {/* CONTACT US */}
      <Contact />
    </div>
  );
};

export default Homepage;
