import { Project } from "../types/project.type";

export const projects: Project[] = [
  {
    id: "infrasketch",
    number: "01",
    name: "Infra",
    highlightedName: "Sketch",

    description:
      "A visual cloud infrastructure design platform for architecting and exporting scalable infrastructure through an intuitive drag-and-drop interface.",

    technologies: [
      "Next.js",
      "React Flow",
      "FastAPI",
      "Terraform",
      "Kubernetes",
      "Jinja2",
      "Docker",
      "TypeScript",
    ],

    features: [
      "Developed a visual cloud infrastructure design platform with a drag-and-drop interface using React Flow and Next.js.",
      "Implemented automated Infrastructure as Code generation, producing Terraform modules for AWS and YAML configurations for Kubernetes.",
      "Enabled dynamic DevOps template rendering with support for AWS services such as VPC, EC2, S3, EIP and Kubernetes Pods and Services.",
      "Empowered teams to visually architect and export scalable cloud infrastructure, bridging the gap between design and deployment workflows.",
    ],

    githubUrl: "https://github.com/YOUR_USERNAME/InfraSketch",

    image: "/infrasketch.png",
    imageAlt: "InfraSketch cloud infrastructure design platform",
  },

  {
    id: "mess-relay",
    number: "02",
    name: "Mess-",
    highlightedName: "Relay",

    description:
      "A role-based mess management platform designed to simplify daily operations for students, accountants and wardens.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Redis",
      "Razorpay",
    ],

    features: [
      "Built a role-based mess management system enabling secure access for students, accountants and wardens.",
      "Integrated Redis for caching frequently accessed data, reducing database load and improving response times.",
      "Designed secure Razorpay payment integration for streamlined mess fee transactions.",
      "Enabled students to view menus, expenses and notices while submitting complaints directly to the chief warden.",
    ],

    githubUrl: "https://github.com/YOUR_USERNAME/Mess-Relay",

    image: "/mess-relay.png",
    imageAlt: "Mess Relay mess management platform",
  },

  {
    id: "job-connect",
    number: "03",
    name: "Job ",
    highlightedName: "Connect",

    description:
      "A full-stack job platform connecting recruiters and job seekers through job listings, search, applications and automated notifications.",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "NodeMailer",
      "Tailwind CSS",
    ],

    features: [
      "Added capabilities for recruiters to create, update and manage job listings and choose suitable candidates.",
      "Created job search functionality with filters to match jobseeker requirements and upload resumes.",
      "Engineered seamless job applications with real-time updates and automated email alerts using NodeMailer.",
    ],

    githubUrl: "https://github.com/YOUR_USERNAME/Job-Connect",

    image: "/job-connect.png",
    imageAlt: "Job Connect recruitment platform",
  },
];