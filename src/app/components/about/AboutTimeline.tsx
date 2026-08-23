"use client";

import { motion } from "motion/react";

import { timelineData } from "../../data/about.data";
import TimelineItem from "./TimelineItem";

export default function AboutTimeline() {
  return (
    <div className="relative mt-14">
      {/* Background timeline line */}
      <div className="absolute left-[30px] top-8 bottom-8 w-px bg-white/10" />

      {/* Animated timeline line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "top",
        }}
        className="absolute left-[30px] top-8 bottom-8 w-px bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.7)]"
      />

      <div className="space-y-20">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={item.title}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}