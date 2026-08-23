import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/skiils";
import Blog from "./components/Blog";
import Contact from "./components/contact/Contact";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Blog />

        <Contact />
      </main>
    </>
  );
}