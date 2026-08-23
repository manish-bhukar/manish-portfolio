"use client";

import { motion } from "motion/react";
import { Mail } from "lucide-react";

import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
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
          h-[450px] w-[450px]
          rounded-full
          bg-lime-500/5
          blur-[150px]
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
                h-2 w-2 rounded-full
                bg-lime-400
                shadow-[0_0_10px_#a3e635]
              "
            />

            LET'S CONNECT
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
            Have an idea?
            <br />

            <span className="text-lime-400">
              Let's build something.
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
            Whether it's a project, an opportunity,
            or just a conversation about technology,
            feel free to reach out.
          </p>
        </motion.div>

        {/* Content */}
        <div
          className="
            mt-14
            grid
            gap-8
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* Social */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div
              className="
                mb-5
                flex items-center gap-3
                text-sm
                text-gray-400
              "
            >
              <Mail
                size={17}
                className="text-lime-400"
              />

              Find me online
            </div>

            <SocialLinks />

            {/* Email */}
            <div
              className="
                mt-6
                rounded-2xl
                border border-white/10
                bg-white/[0.02]
                p-5
              "
            >
              <p className="text-xs text-gray-600">
                Prefer email?
              </p>

              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="
                  mt-2
                  block
                  text-sm
                  text-gray-300
                  transition-colors
                  hover:text-lime-400
                "
              >
                YOUR_EMAIL@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Form */}
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
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}