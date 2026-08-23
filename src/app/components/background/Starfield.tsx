"use client";

import { motion } from "motion/react";
import { stars } from "../../data/starfield.data";

export default function Starfield() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Very subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(163,230,53,0.025),transparent_45%)]" />

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            boxShadow:
              star.size >= 2
                ? "0 0 8px rgba(255,255,255,0.35)"
                : "0 0 4px rgba(255,255,255,0.2)",
          }}
          animate={{
            x: [0, star.driftX, 0],
            y: [0, star.driftY, 0],
            opacity: [
              star.opacity * 0.5,
              star.opacity,
              star.opacity * 0.7,
              star.opacity,
            ],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}