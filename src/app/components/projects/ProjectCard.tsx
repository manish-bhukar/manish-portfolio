"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Project } from "../../types/project.type";
import ProjectTech from "./ProjectTech";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="group relative"
    >
      {/* Card glow */}
      <div
        className={`pointer-events-none absolute -inset-1 rounded-[28px] bg-lime-400/0 blur-2xl transition-all duration-700 group-hover:bg-lime-400/[0.06] ${
          isReversed ? "lg:-rotate-1" : "lg:rotate-1"
        }`}
      />

      <div
        className={`relative grid overflow-hidden rounded-[24px] border border-white/10 bg-[#07090a]/80 transition-all duration-500 hover:border-lime-400/30 lg:grid-cols-2 ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Project image */}
        <div
          className={`relative min-h-[260px] overflow-hidden sm:min-h-[320px] lg:min-h-[430px] ${
            isReversed ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {/* Image background */}
          <div className="absolute inset-0 bg-[#0a0d0e]" />

          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030405]/70 via-transparent to-transparent" />

          {/* Number */}
          <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-lime-400/50 bg-[#030405]/80 text-sm font-semibold text-lime-400 backdrop-blur-md sm:left-7 sm:top-7">
            {project.number}
          </div>

          {/* Image glow */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-lime-400/10 blur-3xl" />
        </div>

        {/* Project information */}
        <div
          className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${
            isReversed ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {project.name}
              <span className="text-lime-400">
                {project.highlightedName}
              </span>
            </h3>

            {/* GitHub */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name}${project.highlightedName} on GitHub`}
              className="group/github flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-lime-400/20 bg-lime-400/[0.03] text-gray-300 transition-all duration-300 hover:border-lime-400/50 hover:bg-lime-400/10 hover:text-lime-400"
            >
              <GitHubIcon />

              <span className="sr-only">
                GitHub
              </span>
            </a>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-6">
            <ProjectTech
              technologies={project.technologies}
            />
          </div>

          {/* Features */}
          <ul className="mt-7 space-y-4">
            {project.features.map((feature, featureIndex) => (
              <motion.li
                key={feature}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: featureIndex * 0.08,
                }}
                className="flex gap-3 text-sm leading-6 text-gray-400"
              >
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />

                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Bottom link */}
          <div className="mt-8 border-t border-white/10 pt-5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm font-semibold text-lime-400 transition-colors hover:text-lime-300"
            >
              View on GitHub

              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.58.1.79-.25.79-.56v-2.16c-3.2.7-3.88-1.35-3.88-1.35-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}