"use client";

import { motion } from "motion/react";
import { TimelineItem as TimelineItemType } from "./type";

type Props = {
  item: TimelineItemType;
  index: number;
};

function TimelineIcon({ type }: { type: TimelineItemType["icon"] }) {
  if (type === "education") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 10l9-5 9 5-9 5-9-5Z" />
        <path d="M7 12.5V17c3 2 7 2 10 0v-4.5" />
        <path d="M21 10v6" />
      </svg>
    );
  }

  if (type === "internship") {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </svg>
    );
  }

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 2v6" />
      <path d="M5.5 8.5 3 11l3.5 3.5" />
      <path d="M18.5 8.5 21 11l-3.5 3.5" />
      <path d="M12 14v8" />
      <path d="M8 18h8" />
    </svg>
  );
}

export default function TimelineItem({ item, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      className="relative flex gap-6"
    >
      {/* Timeline icon */}
      <div
        className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-[#030405] text-lime-400 ${
          index === 2
            ? "border-lime-400 bg-lime-400/5 shadow-[0_0_25px_rgba(163,230,53,0.15)]"
            : "border-lime-400/60 shadow-[0_0_20px_rgba(163,230,53,0.1)]"
        }`}
      >
        <TimelineIcon type={item.icon} />
      </div>

      {/* Content */}
      <div className={index !== 2 ? "pb-14" : ""}>
        <p className="mb-2 text-sm font-semibold text-lime-400">
          {item.period}
        </p>

        <h3 className="text-xl font-semibold text-white sm:text-2xl">
          {item.title}
        </h3>

        <p className="mt-2 text-gray-400">
          {item.organization}
        </p>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}