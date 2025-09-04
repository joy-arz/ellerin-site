import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionDecorations } from './SectionDecorations';

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce web application built with React and integrated payment systems. Features include product catalog, shopping cart, and user authentication.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzU2OTMxNTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      status: "In Progress"
    },
    {
      title: "Task Management App",
      description: "A mobile-first task management application with intuitive design and real-time collaboration features. Helps teams stay organized and productive.",
      image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU2OTM2OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React Native", "Firebase", "TypeScript"],
      status: "Completed"
    },
    {
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for visualizing complex datasets with dynamic charts and real-time updates. Built for better data-driven decision making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY4ODkzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Python", "D3.js", "PostgreSQL", "Docker"],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <SectionDecorations variant="minimal" side="left" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">My work</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl tracking-tight">Featured Projects</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills, creativity, and problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative">
              {/* Card decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm backdrop-blur-sm ${
                    project.status === 'Completed' 
                      ? 'bg-green-100/90 text-green-800 dark:bg-green-900/90 dark:text-green-200' 
                      : 'bg-yellow-100/90 text-yellow-800 dark:bg-yellow-900/90 dark:text-yellow-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Image overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3>{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <button className="px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 transition-opacity rounded-lg">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-border hover:bg-accent transition-colors rounded-lg">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}