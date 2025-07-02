import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Nav from "./components/navbar";
import Skills from "./components/skills";
import { StarBackground } from "./components/star_bg"; // Import your custom component
// import  PlanetBackground from "./components/starfield"; // Import the starfield component
export default function App() {
  return (
    // Ensure this div covers the full viewport height to contain children properly
    <div className="relative text-white overflow-x-hidden" style={{ minHeight: '100vh' }}>
      < StarBackground/> {/* This will now be at z-index: 0 */}
      <main className="relative z-10"> {/* This will be above it at z-index: 10 */}
        <Nav />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}