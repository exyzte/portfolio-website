import { link } from "fs";
import ProjectCard from "./ProjectCard";


const PROJECTS = [
  {
    id: "project-0",
    title: "xbeliv.com | AI CRM Platform (Founder)",
    description: "My own startup. A comprehensive CRM that integrates AI automations and business development features. Designed to streamline lead management, automate outreach, and significantly improve sales close rates.",
    tech: ["Next.js", "AI Automations", "CRM Engine", "Business Development"],
    type: "featured",
    image: "/images/xbeliv.png",
    link: "https://xbeliv.com"
  },
  {
    id: "project-1",
    title: "Dotaciones Braquile | Enterprise Catalog Platform",
    description: "A production-grade digital catalog platform for a leading corporate clothing company. Features a custom database, GSAP-animated catalog components, administrative access, and dynamic product rendering.",
    tech: ["Next.js", "GSAP Animations", "PostgreSQL", "Supabase", "React", "Full Stack"],
    type: "featured",
    image: "/images/braquile.png",
    link: "https://dotacionesbraquile.com"
  },
  {
    id: "project-2",
    title: "Embody Ink | Studio Management System",
    description: "A high-end platform for a tattoo studio. Includes an interactive calendar scheduling tool, completely manageable from an authenticated, Apple-inspired admin dashboard.",
    tech: ["Next.js", "Scheduling API", "Admin Dashboard", "Full Stack"],
    type: "featured",
    image: "/images/embodyink.png",
    link: "https://embodyink.vercel.app"
  },
  {
    id: "project-3",
    title: "AI-Restaurant Ecosystem - Domo Burguer",
    description: "A high-end, MERN stack burger delivery platform featuring an AI Agent assistant, Leaflet integration, Order Processing and more.",
    tech: ["MERN", "AI Agent", "Leaflet", "Map Customization"],
    type: "featured",
    image: "/images/domo.jpg",
    link: "https://full-stack-smart-restaurant-ecosystem-davids-projects-b21f3f2a.vercel.app/"
  },
  {
    id: "project-4",
    title: "Music Record Label Environment",
    description: "An immersive app for a record label. Showcasing releases, news, artists, albums, and interactive media. Railway hosted backend with MongoDB and a React frontend. Built with a focus on sleek design, GSAP animations, and responsive design.",
    tech: ["React Native", "Express", "TypeScript", "Node", "MongoDB - Supabase", "GSAP Animations", "Responsive Design", "Railway Hosting"],
    type: "featured",
    image: "/images/wayra.png",
    link: "https://wayra.space"
  },
  {/* {
    id: "project-2",
    title: "Byron's Landscaping | Dynamic Portfolio",
    description: "A premium landscaping platform featuring a dynamically rendered GSAP portfolio. Allows administrators to seamlessly replace showcased images and text from a secure, custom-built admin dashboard.",
    tech: ["React", "GSAP Animations", "Next.js", "Admin Dashboard", "Dynamic Content"],
    type: "featured",
    image: "/images/byrons.png",
    link: "https://byron-s-landscaping.vercel.app/"
  }, */}
];

export default function BentoGrid() {
  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-fr gap-4">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tech}
            image={project.image}
            isFeatured={project.type === "featured"}
            onClick={() => window.open(project.link, "_blank")}
          />
        ))}
      </div>
    </section>
  );
}
