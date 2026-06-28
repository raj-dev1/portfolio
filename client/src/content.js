// ─────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE to customize your portfolio. Nothing else needs to change.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Arjun Dev",
  initials: "AD",
  role: "MERN Stack Developer",
  tagline:
    "I build scalable full-stack applications using React, Node.js, Express and MongoDB. I love clean code and fast UIs.",
  location: "Lahore, Punjab",
  availability: "Available for new projects",
  email: "hello@arjundev.com",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/yourhandle" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourhandle" },
    { label: "Twitter / X", url: "https://x.com/yourhandle" },
    { label: "Instagram", url: "https://instagram.com/yourhandle" },
  ],
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm a MERN stack web developer focused on building production-ready applications. I enjoy designing APIs, creating interactive user interfaces, and optimizing performance to deliver smooth, efficient user experiences.",
    "Along with strong problem-solving skills, I follow clean architecture principles and modern development patterns. I'm passionate about writing maintainable code, improving UI/UX flows, and building applications that feel fast, intuitive, and reliable.",
  ],
};

// Flat list used by the Skills card grid.
// `color` accepts any CSS color and is used for the icon badge background.
export const skills = {
  heading: "Skills & Technologies",
  subheading: "I work with modern tools and technologies to build fast, scalable, and efficient web applications.",
  items: [
    {
      name: "React",
      description: "Building fast, interactive, component-based UIs with clean state management.",
      icon: "react",
      color: "#149eca",
    },
    {
      name: "Node.js",
      description: "Designing efficient, scalable backend logic and RESTful APIs.",
      icon: "node",
      color: "#3c873a",
    },
    {
      name: "Express",
      description: "Structuring clean, maintainable server-side routing and middleware.",
      icon: "express",
      color: "#6b7280",
    },
    {
      name: "MongoDB",
      description: "Modeling flexible, performant NoSQL data for real-world apps.",
      icon: "database",
      color: "#47a248",
    },
    {
      name: "TypeScript",
      description: "Writing type-safe code that scales across larger codebases.",
      icon: "typescript",
      color: "#3178c6",
    },
    {
      name: "Tailwind CSS",
      description: "Creating responsive, modern layouts quickly using utility-first styling.",
      icon: "tailwind",
      color: "#38bdf8",
    },
    {
      name: "PostgreSQL",
      description: "Designing relational schemas and writing efficient queries.",
      icon: "database",
      color: "#4169e1",
    },
    {
      name: "Git & GitHub",
      description: "Managing version control and collaborating across teams cleanly.",
      icon: "git",
      color: "#f05032",
    },
  ],
};

export const projects = {
  heading: "Projects",
  subheading: "A few things I've built recently — production apps, not tutorials.",
  items: [
    {
      title: "Fintrack",
      description:
        "A multi-currency expense tracker for freelancers, with bank-sync, automated invoice reminders, and a reporting dashboard.",
      stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/projects/fintrack.svg",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/yourhandle/fintrack",
      year: "2025",
    },
    {
      title: "Shelfie",
      description:
        "An inventory and order-management system for a small e-commerce brand, replacing three spreadsheets with one dashboard.",
      stack: ["Next.js", "Express", "MongoDB", "AWS S3"],
      image: "/projects/shelfie.svg",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/yourhandle/shelfie",
      year: "2024",
    },
    {
      title: "Roomly",
      description:
        "A booking platform for short-term rentals with real-time availability, calendar sync, and a custom admin panel.",
      stack: ["React", "GraphQL", "Node.js", "Redis"],
      image: "/projects/roomly.svg",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/yourhandle/roomly",
      year: "2024",
    },
    {
      title: "PulseCRM",
      description:
        "A lightweight CRM for agencies to track leads, send follow-up sequences, and visualize pipeline health.",
      stack: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
      image: "/projects/pulsecrm.svg",
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/yourhandle/pulsecrm",
      year: "2023",
    },
  ],
};

export const testimonials = {
  heading: "Testimonials",
  subheading: "Feedback from clients and collaborators I've worked with on real projects and web applications.",
  items: [
    {
      quote:
        "Arjun handled both frontend and backend tasks smoothly and always kept the codebase clean, structured, and easy to maintain. He caught performance issues early and fixed them without disrupting the workflow.",
      name: "Wambui Muli",
      role: "Product Lead, Shelfie",
      date: "May 2025",
      rating: 5,
    },
    {
      quote:
        "Communication was excellent across a 9-hour time difference. Every update was clear, every deadline was hit, and the final product matched exactly what we'd discussed.",
      name: "Daniel Reyes",
      role: "Founder, Roomly",
      date: "Feb 2025",
      rating: 5,
    },
    {
      quote:
        "We came in with a messy spreadsheet-based process and walked out with a real dashboard our whole team actually uses. Would hire again without hesitation.",
      name: "Priya Nair",
      role: "Operations Manager, Fintrack",
      date: "Nov 2024",
      rating: 5,
    },
  ],
};

export const contact = {
  heading: "Contact Us",
  subheading: "Have a project in mind? Let's connect and discuss how I can help bring your ideas to life.",
  formTitle: "Get in touch today",
  formSubtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
};
