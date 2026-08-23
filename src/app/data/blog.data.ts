import { BlogPost } from "@/app/types/blog.types";

export const blogPosts: BlogPost[] = [
  {
    id: "nextjs-rendering",
    title: "Understanding Rendering in Next.js",
    description:
      "A practical breakdown of CSR, SSR, SSG and ISR — and when to use each rendering strategy.",
    category: "NEXT.JS",
    tags: ["CSR", "SSR", "SSG", "ISR"],
    readTime: "8 min read",
    date: "Aug 2026",
    featured: true,
    href: "#",
  },

  {
    id: "react-vs-nextjs",
    title: "React vs Next.js",
    description:
      "Understanding the differences between React and Next.js and why Next.js is more than just a React framework.",
    category: "FRONTEND",
    tags: ["React", "Next.js"],
    readTime: "6 min read",
    date: "Aug 2026",
    href: "#",
  },

  {
    id: "internship-lessons",
    title: "What I Learned During My Internship",
    description:
      "Lessons from working on production systems, reviewing PRs and shipping features used by real users.",
    category: "CAREER",
    tags: ["Internship", "Engineering"],
    readTime: "5 min read",
    date: "Jul 2026",
    href: "#",
  },

];