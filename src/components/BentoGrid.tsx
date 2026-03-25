import { link } from "fs";
import ProjectCard from "./ProjectCard";


const PROJECTS = [
  {
    id: "domo-burger",
    title: "AI-Restaurant Ecosystem - Domo Burguer",
    description: "A high-end, MERN stack burger delivery platform featuring an AI Agent assistant, Leaflet integration, Order Processing and more.",
    tech: ["MERN", "AI Agent", "Leaflet", "Map Customization"],
    type: "featured",
    image: "/images/domo.jpg",
    link: "https://full-stack-smart-restaurant-ecosystem-davids-projects-b21f3f2a.vercel.app/"
  },
  {
    id: "project-2",
    title: "AI Documentation Hub",
    description: "A centralized hub for technical documentation with advanced search and AI summarization capabilities.",
    tech: ["Next.js", "OpenAI", "Tailwind"],
    type: "secondary",
    image: "/images/docs.jpg",
    link: "https://full-stack-smart-restaurant-ecosystem-davids-projects-b21f3f2a.vercel.app/"
  },
  {
    id: "project-3",
    title: "Music Record Label Environment",
    description: "An immersive web experience for a music record label, showcasing releases, news, artists, albums, and interactive media.",
    tech: ["React Native", "Vector DB", "Modern Languages"],
    type: "secondary",
    image: "/images/lang.jpg",
    link: "http://localhost:5173/"
  }
];

export default function BentoGrid() {
  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
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
