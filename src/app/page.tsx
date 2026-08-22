import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="about"
          className="min-h-screen bg-[#030405] px-6 py-32 text-white"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold">About</h2>
          </div>
        </section>

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