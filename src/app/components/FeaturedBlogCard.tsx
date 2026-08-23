"use client";

import { motion } from "motion/react";
import { ArrowUpRight, BookOpen } from "lucide-react";

import { BlogPost } from "../types/blog.types";

type FeaturedBlogCardProps = {
  post: BlogPost;
};

export default function FeaturedBlogCard({
  post,
}: FeaturedBlogCardProps) {
  return (
    <motion.a
      href={post.href}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        scale: 1.01,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        group relative block
        overflow-hidden
        rounded-[32px]
        border border-lime-400/20
        bg-[#080b0c]
        p-7
        sm:p-10
      "
    >
      {/* Large glow */}
      <div
        className="
          pointer-events-none
          absolute -right-32 -top-32
          h-[400px] w-[400px]
          rounded-full
          bg-lime-400/10
          blur-[120px]
          transition-all duration-700
          group-hover:bg-lime-400/15
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.04]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(163,230,53,0.6) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(163,230,53,0.6) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                border border-lime-400/20
                bg-lime-400/5
                text-lime-400
              "
            >
              <BookOpen size={19} />
            </div>

            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-gray-600">
                FEATURED ARTICLE
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {post.date}
              </p>
            </div>
          </div>

          <div
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-white/10
              text-gray-500
              transition-all duration-300
              group-hover:rotate-45
              group-hover:border-lime-400/40
              group-hover:bg-lime-400
              group-hover:text-black
            "
          >
            <ArrowUpRight size={20} />
          </div>
        </div>

        {/* Category */}
        <div className="mt-12">
          <span
            className="
              rounded-full
              border border-lime-400/30
              bg-lime-400/5
              px-3 py-1.5
              font-mono
              text-xs
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
            mt-6
            max-w-3xl
            text-3xl
            font-bold
            leading-tight
            tracking-tight
            sm:text-4xl
            lg:text-5xl
          "
        >
          {post.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-2xl
            text-sm
            leading-7
            text-gray-400
            sm:text-base
          "
        >
          {post.description}
        </p>

        {/* Tags */}
        <div className="mt-7 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-md
                bg-white/[0.04]
                px-3 py-1.5
                font-mono
                text-xs
                text-gray-500
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          className="
            mt-10
            flex flex-wrap
            items-center
            gap-5
            border-t border-white/5
            pt-6
            text-xs
            text-gray-500
          "
        >
          <span>
            {post.readTime}
          </span>

          <span className="h-1 w-1 rounded-full bg-lime-400" />

          <span>
            Written by Manish
          </span>

          <span className="ml-auto hidden text-lime-400 sm:block">
            Read article →
          </span>
        </div>
      </div>
    </motion.a>
  );
}