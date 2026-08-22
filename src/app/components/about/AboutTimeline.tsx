"use client";

import { aboutTimeline } from "./constants";
import TimelineItem from "./TimelineItem";

export default function AboutTimeline() {
  return (
    <div className="relative">
      {/* Timeline vertical line */}
      <div className="absolute left-[22px] top-8 h-[calc(100%-40px)] w-px bg-gradient-to-b from-lime-400/60 via-lime-400/20 to-transparent" />

      {aboutTimeline.map((item, index) => (
        <TimelineItem
          key={`${item.period}-${item.title}`}
          item={item}
          index={index}
        />
      ))}
    </div>
  );
}