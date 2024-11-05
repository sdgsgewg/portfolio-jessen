import Header from "./components/header/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/portfolio/Portfolio";
import Education from "./components/education/Education";
import ComServ from "./components/community/ComServ";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/footer/Footer";

import useAnimationObserver from "./hooks/useAnimationObserver";

function App() {
  useAnimationObserver("slide-in-left", ".slide-left");
  useAnimationObserver("slide-in-right", ".slide-right");

  return (
    <>
      <Header />

      <Hero />
      <About />
      <Portfolio />
      <Education />
      <ComServ />
      <Skills />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
