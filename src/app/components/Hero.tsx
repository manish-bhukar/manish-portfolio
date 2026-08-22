"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const roles = [
  "Next.js Developer",
  "Full Stack Developer",
  "Software Engineer",
];

const name = "Manish Bhukar";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = name.slice(0, displayText.length + 1);
        setDisplayText(nextText);

        if (nextText === name) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        const nextText = name.slice(0, displayText.length - 1);
        setDisplayText(nextText);

        if (nextText === "") {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030405] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-lime-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-amber-500/5 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-16 pt-28 lg:px-10">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative">
              <div className="absolute inset-[-18px] rounded-full bg-lime-400/10 blur-2xl" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-12px] rounded-full border border-lime-400/40"
              />

              <div className="relative h-64 w-64 rounded-full border-2 border-lime-400 p-2 shadow-[0_0_35px_rgba(163,230,53,0.25)] sm:h-72 sm:w-72">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-[#10151a]">
                  <Image
                    src="/profile_photo.jpeg"
                    alt="Manish Bhukar"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 256px, 288px"
                  />
                </div>
              </div>

              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-25px] block rounded-full border border-lime-400/10"
              />

              <span className="absolute right-3 top-4 h-2.5 w-2.5 rounded-full bg-lime-400 shadow-[0_0_12px_#a3e635]" />
              <span className="absolute bottom-10 left-0 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_12px_#fde047]" />
              <span className="absolute left-7 top-20 h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_#a3e635]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex items-center gap-2 rounded-full border border-lime-400/70 bg-lime-400/5 px-5 py-2 text-sm font-semibold tracking-wide text-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.12)]"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
              OPEN TO WORK
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-7 inline-flex items-center rounded-full border border-lime-400/30 bg-lime-400/5 px-5 py-2 text-sm text-lime-400"
            >
              <span className="mr-3">👋</span>
              <span>Hey, I'm</span>
              <span className="mx-3 h-4 w-px bg-lime-400/40" />
            </motion.div>

            {/* TYPING NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="min-h-[1.2em] text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span>{displayText}</span>

              <span className="ml-1 inline-block h-[0.9em] w-[3px] animate-pulse bg-lime-400 align-middle" />
            </motion.h1>

            {/* ROLES */}
            <div className="mt-6 h-12 overflow-hidden sm:h-14">
              <motion.div
                animate={{ y: [0, -56, -112, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.3, 0.6, 1],
                }}
                className="text-2xl font-semibold text-lime-400 sm:text-3xl"
              >
                {roles.map((role) => (
                  <div key={role} className="flex h-14 items-center">
                    {role}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-5 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
            >
              Software engineer focused on building scalable, production-ready
              web applications and creating simple experiences for complex
              problems.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a
                href="/Resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-lime-400 px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.3)]"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-lime-400/30 bg-lime-400/5 px-7 py-3.5 font-semibold text-lime-400 transition-all duration-300 hover:border-lime-400 hover:bg-lime-400/10"
              >
                View Projects
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}