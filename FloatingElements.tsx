export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circle */}
      <div 
        className="absolute w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full border border-primary/3 animate-float"
        style={{ top: '10%', right: '10%', opacity: 0.3 }}
      />
      
      {/* Medium floating square */}
      <div 
        className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border border-primary/2 rotate-45 animate-float-reverse"
        style={{ top: '60%', left: '5%', opacity: 0.3 }}
      />
      
      {/* Small floating dots */}
      <div 
        className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-primary/20 rounded-full animate-float"
        style={{ 
          top: '20%', 
          left: '20%',
          animationDelay: '1s',
          animationDuration: '3s'
        }}
      />
      
      <div 
        className="absolute w-1 h-1 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-primary/15 rounded-full animate-float-reverse"
        style={{ 
          top: '70%', 
          right: '30%',
          animationDelay: '2s',
          animationDuration: '5s'
        }}
      />
      
      <div 
        className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-primary/10 rounded-full animate-float"
        style={{ 
          top: '40%', 
          left: '80%',
          animationDelay: '0.5s',
          animationDuration: '4s'
        }}
      />
      
      {/* Geometric lines */}
      <div 
        className="absolute w-12 h-px sm:w-16 sm:h-px md:w-20 md:h-px lg:w-24 lg:h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-45 animate-float"
        style={{ 
          top: '30%', 
          left: '15%',
          animationDelay: '3s',
          animationDuration: '7s'
        }}
      />
      
      <div 
        className="absolute w-8 h-px sm:w-10 sm:h-px md:w-12 md:h-px lg:w-16 lg:h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent -rotate-30 animate-float-reverse"
        style={{ 
          top: '80%', 
          right: '20%',
          animationDelay: '1.5s',
          animationDuration: '5s'
        }}
      />
      
      {/* Additional decorative elements */}
      <div 
        className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 border-2 border-primary/3 rounded-full animate-float"
        style={{ 
          top: '15%', 
          left: '70%',
          animationDelay: '4s',
          animationDuration: '8s',
          opacity: 0.3
        }}
      />
      
      <div 
        className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 border border-primary/4 rotate-12 animate-float-reverse"
        style={{ 
          top: '85%', 
          left: '40%',
          animationDelay: '2.5s',
          animationDuration: '6s',
          opacity: 0.3
        }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '2rem 2rem',
          mask: 'radial-gradient(circle at center, black 40%, transparent 70%)',
        }}
      />
    </div>
  );
}