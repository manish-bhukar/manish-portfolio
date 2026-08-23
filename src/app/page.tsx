import Hero from "./components/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/skiils";
import Blog from "./components/Blog";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar";
import Starfield from "./components/background/Starfield";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030405]">
      <Starfield />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </div>
    </main>
  );
}