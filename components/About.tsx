import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionDecorations } from './SectionDecorations';

export function About() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <SectionDecorations variant="default" side="both" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                <span className="text-sm text-muted-foreground uppercase tracking-widest">Get to know me</span>
              </div>
              <h2 className="text-3xl md:text-4xl tracking-tight">About Me</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a dedicated university student with a passion for bridging the gap between 
                creative design and technical innovation. My journey began with curiosity about 
                how digital experiences shape our daily lives, and has evolved into a deep 
                commitment to creating solutions that matter.
              </p>
              <p>
                Currently pursuing my degree, I spend my time exploring various aspects of 
                technology, design, and user experience. I believe that the best solutions 
                come from understanding both the technical possibilities and human needs.
              </p>
              <p>
                When I'm not studying or working on projects, you can find me reading about 
                emerging technologies, sketching new ideas, or collaborating with fellow 
                students on innovative solutions.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Background decoration for image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU2ODgyOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Portrait"
                className="w-80 h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-300 relative z-10"
              />
              
              {/* Decorative border */}
              <div className="absolute -inset-2 border border-primary/10 rounded-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}