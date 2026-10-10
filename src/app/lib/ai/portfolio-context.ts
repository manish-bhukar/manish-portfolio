import { timelineData } from "../../data/about.data";
import { projects } from "../../data/project.data";
import { skills } from "../../data/skills.data";

export const portfolioContext = {
  personal: {
    name: "Manish Bhukar",
    role: "Software Engineer",
  },

  education: timelineData[0],

  experience: timelineData.slice(1),

  skills: skills.map((skill) => ({
    name: skill.name,
    category: skill.category,
  })),

  projects: projects.map((project) => ({
    id: project.id,
    name: `${project.name}${project.highlightedName}`,
    description: project.description,
    technologies: project.technologies,
    features: project.features,
    githubUrl: project.githubUrl,
  })),
};