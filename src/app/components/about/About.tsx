"use client";

import { motion } from "motion/react";
import AboutTimeline from "./AboutTimeline";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#030405] px-6 py-28 text-white lg:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-lime-500/5 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-lime-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/5 px-4 py-2 text-sm font-medium text-lime-400">
            <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_10px_#a3e635]" />

            ABOUT ME
          </div>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Turning ideas into{" "}
            <span className="text-lime-400">
              real experiences.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I'm a Software Engineer who enjoys building fast, reliable and
            scalable web experiences. My journey has taken me from MNNIT
            Allahabad to industry experience and now to working full-time as
            a Software Engineer.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          
          {/* Timeline */}
          <AboutTimeline />

          {/* About image */}
          <AboutImage />

        </div>
      </div>
    </section>
  );
}

/* ----------------------------------
   About image
---------------------------------- */

function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative lg:sticky lg:top-28"
    >
      {/* Glow */}
      <div className="absolute -inset-5 rounded-[32px] bg-lime-400/10 blur-3xl" />

      {/* Image */}
      <div className="relative overflow-hidden rounded-[28px] border border-lime-400/30 bg-[#080b0c] shadow-[0_0_50px_rgba(163,230,53,0.08)]">
        <img
          src="/about_me.jpg"
          alt="Manish working"
          className="h-[520px] w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030405]/80 via-transparent to-transparent" />

        {/* Bottom information */}
        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-md">
          <p className="text-sm font-medium text-lime-400">
            BUILD • LEARN • IMPROVE
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-300">
            Always exploring better ways to build reliable and meaningful
            software.
          </p>
        </div>
      </div>

      {/* Decorative rotating circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-lime-400/40"
      />

      {/* Decorative dot */}
      <span className="absolute -left-3 bottom-20 h-3 w-3 rounded-full bg-lime-400 shadow-[0_0_15px_#a3e635]" />
    </motion.div>
  );
}