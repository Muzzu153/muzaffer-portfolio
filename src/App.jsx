import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Section from "./components/sections/Section";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Navbar from "./components/sections/Navbar";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="bg-light font-press text-dark">
      <Navbar/>
      <Hero />

      <Section id="skills" addShapes>
        <Skills />
      </Section>

      <Section id="services" addShapes>
        <Services />
      </Section>

      <Section id="projects" addShapes>
        <Projects />
      </Section>

      <Section id="contact" addShapes>
        <Contact/>
      </Section>

      <Footer/>
    </div>
  );
}

export default App;
