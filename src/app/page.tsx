import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/skiils";
import Blog from "./components/Blog";
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

        <section
          id="contact"
          className="min-h-screen bg-[#030405] px-6 py-32 text-white"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold">Contact</h2>
          </div>
        </section>
      </main>
    </>
  );
}