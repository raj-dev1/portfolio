// ─────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE to customize your portfolio. Nothing else needs to change.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "RAJASEKAR V",
  role: "Full-Stack Developer",
  tagline: "I build fast, reliable web products for clients worldwide.",
  location: "Chennai, India · Remote",
  availability: "Available for freelance projects",
  email: "mailtorajasekar13@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/yourhandle" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourhandle" },
    { label: "Upwork", url: "https://upwork.com/freelancers/yourhandle" },
    { label: "Twitter / X", url: "https://x.com/yourhandle" },
  ],
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a full-stack developer with 4+ years of experience turning product ideas into shipped, working software — from the first line of code to the deployed app your users actually touch.",
    "I work mostly with React on the frontend and Node.js on the backend, and I care a lot about the parts that don't show up in a screenshot: clean APIs, sane database design, fast load times, and code the next developer can actually read.",
    "I've worked with startups and small businesses across the US, UK, and Australia — async-friendly, comfortable with time-zone gaps, and direct about timelines and scope.",
  ],
  stats: [
    { value: "40+", label: "Projects shipped" },
    { value: "4+", label: "Years experience" },
    { value: "15+", label: "Clients worldwide" },
    { value: "98%", label: "Repeat client rate" },
  ],
};

export const skills = {
  heading: "Skills",
  groups: [
    {
      category: "frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5 / CSS3"],
    },
    {
      category: "backend",
      items: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "devops",
      items: ["Docker", "AWS", "CI/CD", "Vercel", "Nginx", "Linux"],
    },
    {
      category: "tools",
      items: ["Git", "Figma", "Postman", "Jest", "Stripe API", "Firebase"],
    },
  ],
};

export const projects = {
  heading: "Projects",
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

export const contact = {
  heading: "Contact",
  subheading: "Have a project in mind?",
  description:
    "Tell me a bit about what you're building and I'll get back to you within a day, usually sooner.",
};
