
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing online stores with real-time analytics and inventory management.",
    image: "https://placehold.co/600x400/2a3446/e6e6e6?text=E-Commerce+Dashboard",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://example.com",
    repoLink: "https://github.com"
  },
  {
    title: "Task Management App",
    description: "A beautiful and intuitive task manager with drag-and-drop functionality, team collaboration and progress tracking.",
    image: "https://placehold.co/600x400/2a3446/e6e6e6?text=Task+Management+App",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    liveLink: "https://example.com",
    repoLink: "https://github.com"
  },
  {
    title: "Travel Booking Platform",
    description: "A modern travel booking website with destination search, itinerary planning, and booking management capabilities.",
    image: "https://placehold.co/600x400/2a3446/e6e6e6?text=Travel+Booking+Platform",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Styled Components"],
    liveLink: "https://example.com",
    repoLink: "https://github.com"
  },
  {
    title: "AI-Powered Content Writer",
    description: "An AI writing assistant that helps users create high-quality content with suggestions and grammar improvements.",
    image: "https://placehold.co/600x400/2a3446/e6e6e6?text=AI+Content+Writer",
    tags: ["React", "Python", "NLP", "Machine Learning", "Express"],
    liveLink: "https://example.com",
    repoLink: "https://github.com"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <h2 className="section-title scroll-reveal">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden rounded-xl transition-all hover:transform hover:-translate-y-2 scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs glass px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-sakura dark:hover:text-sakura-light transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-sakura dark:hover:text-sakura-light transition-colors"
                  >
                    <Github className="w-4 h-4" /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
