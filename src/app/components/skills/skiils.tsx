"use client";

import { motion } from "motion/react";

import SkillsUniverse from "./skillsUniverse";
import SkillsHint from "./skillsHint";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#030405]
        px-6
        py-28
        text-white
        lg:px-10
      "
    >
      {/* Background grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.08]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(163,230,53,0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(163,230,53,0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[500px] w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-lime-500/5
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div
            className="
              inline-flex
              items-center
              gap-3
              font-mono
              text-2xl
              font-bold
              text-gray-200
              sm:text-3xl
              lg:text-4xl
            "
          >
            <span className="text-lime-400">
              ⚙
            </span>

            <span>
              # Skills.json
            </span>
          </div>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-gray-500
              sm:text-base
            "
          >
            Technologies and tools I use to build
            production-ready applications.
          </p>
        </motion.div>

        {/* Globe */}
        <div className="relative mt-8">
          <SkillsUniverse />

          <SkillsHint />
        </div>
      </div>
    </section>
  );
}