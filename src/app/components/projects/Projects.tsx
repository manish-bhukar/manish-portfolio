"use client";

import { motion } from "motion/react";

import { projects } from "../../data/project.data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-transparent px-6 py-28 text-white lg:px-10"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(163,230,53,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.5)_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* Left glow */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-lime-500/[0.06] blur-[150px]" />

      {/* Right glow */}
      <div className="pointer-events-none absolute -right-48 top-1/2 h-[500px] w-[500px] rounded-full bg-lime-500/[0.04] blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <ProjectsHeader />

        {/* Projects */}
        <div className="mt-16 space-y-8 sm:mt-20 sm:space-y-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      className="mx-auto max-w-3xl text-center"
    >
      {/* Label */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/[0.04] px-4 py-2 text-sm font-medium text-lime-400">
        <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_#a3e635]" />

        PROJECTS
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Things I&apos;ve{" "}
        <span className="text-lime-400">
          Built
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">
        A few projects that reflect my passion for building scalable,
        performant and real-world applications.
      </p>

      {/* Decorative line */}
      <div className="mx-auto mt-7 flex items-center justify-center gap-3">
        <div className="h-1 w-20 rounded-full bg-lime-400 shadow-[0_0_15px_rgba(163,230,53,0.5)]" />

        <div className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_#a3e635]" />
      </div>
    </motion.div>
  );
}