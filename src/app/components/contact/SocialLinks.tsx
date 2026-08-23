"use client";

import { ArrowUpRight } from "lucide-react";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

import { socialLinks } from "@/app/data/contact.data";

const icons = {
  Instagram: SiInstagram,
  LinkedIn: FaLinkedinIn,
  GitHub: SiGithub,
};

export default function SocialLinks() {
  return (
    <div className="space-y-4">
      {socialLinks.map((social) => {
        const Icon =
          icons[social.name as keyof typeof icons];

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center justify-between
              rounded-2xl
              border border-white/10
              bg-white/[0.02]
              p-5
              transition-all duration-300
              hover:border-lime-400/30
              hover:bg-lime-400/[0.04]
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  border border-white/10
                  text-gray-400
                  transition-all duration-300
                  group-hover:border-lime-400/30
                  group-hover:text-lime-400
                "
              >
                <Icon size={20} />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  {social.name}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {social.username}
                </p>
              </div>
            </div>

            <ArrowUpRight
              size={18}
              className="
                text-gray-600
                transition-all duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-lime-400
              "
            />
          </a>
        );
      })}
    </div>
  );
}