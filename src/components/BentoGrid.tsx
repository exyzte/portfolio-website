import { link } from "fs";
import ProjectCard from "./ProjectCard";


const PROJECTS = [
  {
    id: "domo-burger",
    title: "Domo Burguer",
    description: "A high-end burger delivery platform featuring an AI Agent assistant, Leaflet integration, and custom map interactions.",
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
    title: "Language Learner Pro",
    description: "Personalized language learning app leveraging spaced repetition and LLM-powered practice partners.",
    tech: ["React Native", "Vector DB", "Modern Languages"],
    type: "secondary",
    image: "/images/lang.jpg",
    link: "https://full-stack-smart-restaurant-ecosystem-davids-projects-b21f3f2a.vercel.app/"
  },
];

export default function BentoGrid() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6">
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
