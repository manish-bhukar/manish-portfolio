"use client";

import { motion } from "motion/react";

export default function SkillsHint() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        absolute bottom--10 left-1/2
        -translate-x-1/2
        whitespace-nowrap
        rounded-full
        border border-white/10
        bg-white/5
        px-5 py-2.5
        text-xs text-gray-300
        backdrop-blur-md
        sm:text-sm
        "
    >
      <span className="mr-2">◉</span>
   
      <span className="hidden sm:inline">
        Drag to explore skills universe
      </span>

      <span className="sm:hidden">
        Swipe to explore
      </span>
    </motion.div>
  );
}