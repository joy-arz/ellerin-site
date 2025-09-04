import { FloatingElements } from './FloatingElements';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <FloatingElements />
      
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            {/* Greeting text */}
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest text-muted-foreground opacity-80">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text">
                Ellerin Aurelia Chowina
              </h1>
            </div>
            
            {/* Role/title */}
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-border"></div>
              <span className="px-4 py-2 border border-border/50 rounded-full bg-background/50 backdrop-blur-sm">
                Student & Creative Developer
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-border"></div>
            </div>
            
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              University student passionate about design, technology, and creating meaningful digital experiences. 
              Currently pursuing my degree while exploring the intersection of creativity and innovation.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 rounded-lg relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-3 border border-border hover:bg-accent transition-all duration-300 rounded-lg relative overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            
            {/* Scroll indicator */}
            <div className="flex flex-col items-center space-y-2 opacity-60">
              <span className="text-xs text-muted-foreground">Scroll to explore</span>
              <div className="w-px h-8 bg-gradient-to-b from-border to-transparent animate-pulse"></div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10 pointer-events-none"></div>
    </section>
  );
}