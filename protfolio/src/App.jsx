
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import WhyHireMe from "./component/WhyHireMe";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyHireMe/>
      <About />
      <Skills/>
      <Project/>
      <Contact />
      <Footer/>
    </>

  );
}

export default App;