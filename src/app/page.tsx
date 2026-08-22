import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/about/About";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />


        <section
          id="experience"
          className="min-h-screen bg-[#07090a] px-6 py-32 text-white"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen bg-[#030405] px-6 py-32 text-white"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen bg-[#07090a] px-6 py-32 text-white"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>
        </section>

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