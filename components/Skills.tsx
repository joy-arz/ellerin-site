import { SectionDecorations } from './SectionDecorations';

export function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["JavaScript", "React", "Python", "HTML/CSS", "Git", "SQL"]
    },
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe Creative Suite", "Sketch", "Canva", "Procreate"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Critical Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30 relative overflow-hidden">
      <SectionDecorations variant="accent" side="both" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              <span className="text-sm text-muted-foreground uppercase tracking-widest">What I can do</span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl tracking-tight">Skills & Expertise</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse set of skills gained through academic pursuits, personal projects, and collaborative experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6 group">
              <div className="text-center relative">
                <h3 className="inline-block relative">
                  {category.title}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent group-hover:w-12 transition-all duration-300"></div>
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-center">
                    <div className="group/skill py-2 px-4 bg-background rounded-lg border border-border hover:border-primary/20 hover:shadow-sm transition-all duration-300 relative overflow-hidden">
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}