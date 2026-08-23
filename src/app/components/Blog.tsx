"use client";

import { motion } from "motion/react";

import { blogPosts } from "../data/blog.data";

import BlogCard from "./BlogCard";
import FeaturedBlogCard from "./FeaturedBlogCard";

export default function Blog() {
  const featuredPost = blogPosts.find(
    (post) => post.featured
  );

  const otherPosts = blogPosts.filter(
    (post) => !post.featured
  );

  return (
    <section
      id="blog"
      className="
        relative
        overflow-hidden
        bg-[#030405]
        px-6
        py-28
        text-white
        lg:px-10
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute -left-40 top-1/3
          h-[450px] w-[450px]
          rounded-full
          bg-lime-500/5
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute -right-40 bottom-0
          h-[400px] w-[400px]
          rounded-full
          bg-lime-500/5
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-lime-400/30
              bg-lime-400/5
              px-4 py-2
              text-sm
              font-medium
              text-lime-400
            "
          >
            <span
              className="
                h-2 w-2
                rounded-full
                bg-lime-400
                shadow-[0_0_10px_#a3e635]
              "
            />

            BLOG / NOTES
          </div>

          <h2
            className="
              max-w-3xl
              text-4xl
              font-bold
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            Things I've learned
            <br />

            <span className="text-lime-400">
              while building things.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-gray-400
              sm:text-lg
            "
          >
            Notes on software engineering, frontend,
            system design, career and things I've
            learned along the way.
          </p>
        </motion.div>

        {/* Featured */}
        {featuredPost && (
          <div className="mt-14">
            <FeaturedBlogCard post={featuredPost} />
          </div>
        )}

        {/* Other posts */}
        <div
          className="
            mt-6
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {otherPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-12
            flex
            justify-center
          "
        >
          <a
            href="#"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border border-white/10
              bg-white/[0.03]
              px-6 py-3
              text-sm
              font-medium
              text-gray-300
              transition-all duration-300
              hover:border-lime-400/30
              hover:bg-lime-400/5
              hover:text-lime-400
            "
          >
            Explore all articles

            <span
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}