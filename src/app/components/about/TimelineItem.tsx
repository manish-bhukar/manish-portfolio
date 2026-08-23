"use client";

import { motion } from "motion/react";

import { TimelineItem as TimelineItemType } from "../../types/about.type";

type Props = {
  item: TimelineItemType;
  index: number;
};


function TimelineIcon({
  icon,
}: {
  icon: "education" | "work" | "code";
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.5,
        ease: "backOut",
      }}
      className="relative z-10 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border border-lime-400 bg-[#030405] text-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.12)]"
    >
      {icon === "education" && <EducationIcon />}

      {icon === "work" && <WorkIcon />}

      {icon === "code" && <CodeIcon />}
    </motion.div>
  );
}

function EducationIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 10l10-5 10 5-10 5-10-5Z" />
      <path d="M6 12.5V17c3 2 9 2 12 0v-4.5" />
      <path d="M22 10v6" />
    </svg>
  );
}

function WorkIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="3"
        y="7"
        width="18"
        height="13"
        rx="2"
      />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
      <path d="M10 12v2h4v-2" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 9-3 3 3 3" />
      <path d="m16 9 3 3-3 3" />
      <path d="m14 5-4 14" />
    </svg>
  );
}

export default function TimelineItem({
  item,
  index,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.35,
      }}
      transition={{
        duration: 0.7,
        delay: 0.35 + index * 0.3,
        ease: "easeOut",
      }}
      className="relative flex gap-8"
    >
      {/* Timeline icon */}
      <TimelineIcon icon={item.icon} />

      {/* Timeline content */}
      <div className="min-w-0 flex-1 pb-2">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.5 + index * 0.3,
          }}
          className="text-lg font-bold text-lime-400"
        >
          {item.year}
        </motion.p>

        <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {item.title}
        </h3>

        <p className="mt-3 text-lg text-gray-400 sm:text-xl">
          {item.organization}
        </p>

        <p className="mt-6 max-w-4xl text-base leading-8 text-gray-500 sm:text-lg">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}