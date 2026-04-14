import { link } from "fs";
import ProjectCard from "./ProjectCard";


const PROJECTS = [
  {
    id: "project-1",
    title: "Music Record Label Environment",
    description: "An immersive app for a record label. Showcasing releases, news, artists, albums, and interactive media. Railway hosted backend with MongoDB and a React frontend. Built with a focus on sleek design, GSAP animations, and responsive design.",
    tech: ["React Native", "Express", "TypeScript", "Node", "MongoDB - Supabase", "GSAP Animations", "Responsive Design", "Railway Hosting"],
    type: "featured",
    image: "/images/lang.jpg",
    link: "https://wayra.space"
  },
  {
    id: "project-2",
    title: "AI-Restaurant Ecosystem - Domo Burguer",
    description: "A high-end, MERN stack burger delivery platform featuring an AI Agent assistant, Leaflet integration, Order Processing and more.",
    tech: ["MERN", "AI Agent", "Leaflet", "Map Customization"],
    type: "featured",
    image: "/images/domo.jpg",
    link: "https://full-stack-smart-restaurant-ecosystem-davids-projects-b21f3f2a.vercel.app/"
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
