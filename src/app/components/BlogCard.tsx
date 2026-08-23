"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { BlogPost } from "@/app/types/blog.types";

type BlogCardProps = {
  post: BlogPost;
  index: number;
};

export default function BlogCard({
  post,
  index,
}: BlogCardProps) {
  return (
    <motion.a
      href={post.href}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -8,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="
        group relative block overflow-hidden
        rounded-3xl
        border border-white/10
        bg-[#080b0c]
        p-6
        transition-colors duration-300
        hover:border-lime-400/30
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute -right-20 -top-20
          h-40 w-40
          rounded-full
          bg-lime-400/5
          blur-3xl
          transition-all duration-500
          group-hover:bg-lime-400/10
        "
      />

      {/* Number + arrow */}
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-sm text-lime-400">
          {String(index + 2).padStart(2, "0")}
        </span>

        <div
          className="
            flex h-9 w-9 items-center justify-center
            rounded-full
            border border-white/10
            text-gray-500
            transition-all duration-300
            group-hover:border-lime-400/40
            group-hover:bg-lime-400
            group-hover:text-black
          "
        >
          <ArrowUpRight size={17} />
        </div>
      </div>

      {/* Category */}
      <div className="relative mt-8">
        <span
          className="
            rounded-full
            border border-lime-400/20
            bg-lime-400/5
            px-3 py-1
            font-mono
            text-[11px]
            font-medium
            tracking-wider
            text-lime-400
          "
        >
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h3
        className="
          relative mt-5
          text-xl font-semibold
          leading-8 text-white
          transition-colors duration-300
          group-hover:text-lime-400
        "
      >
        {post.title}
      </h3>

      {/* Description */}
      <p
        className="
          relative mt-3
          text-sm leading-7
          text-gray-500
        "
      >
        {post.description}
      </p>

      {/* Tags */}
      <div className="relative mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-md
              bg-white/[0.03]
              px-2.5 py-1
              font-mono
              text-[11px]
              text-gray-500
            "
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Bottom */}
      <div
        className="
          relative mt-8
          flex items-center justify-between
          border-t border-white/5
          pt-5
          text-xs text-gray-600
        "
      >
        <span>{post.date}</span>

        <span>{post.readTime}</span>
      </div>
    </motion.a>
  );
}