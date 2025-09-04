export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circle */}
      <div 
        className="absolute w-96 h-96 rounded-full border border-primary/3 animate-float"
        style={{ top: '10%', right: '10%', opacity: 0.3 }}
      />
      
      {/* Medium floating square */}
      <div 
        className="absolute w-32 h-32 border border-primary/2 rotate-45 animate-float-reverse"
        style={{ top: '60%', left: '5%', opacity: 0.3 }}
      />
      
      {/* Small floating dots */}
      <div 
        className="absolute w-4 h-4 bg-primary/20 rounded-full animate-float"
        style={{ 
          top: '20%', 
          left: '20%',
          animationDelay: '1s',
          animationDuration: '3s'
        }}
      />
      
      <div 
        className="absolute w-3 h-3 bg-primary/15 rounded-full animate-float-reverse"
        style={{ 
          top: '70%', 
          right: '30%',
          animationDelay: '2s',
          animationDuration: '5s'
        }}
      />
      
      <div 
        className="absolute w-2 h-2 bg-primary/10 rounded-full animate-float"
        style={{ 
          top: '40%', 
          left: '80%',
          animationDelay: '0.5s',
          animationDuration: '4s'
        }}
      />
      
      {/* Geometric lines */}
      <div 
        className="absolute w-24 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-45 animate-float"
        style={{ 
          top: '30%', 
          left: '15%',
          animationDelay: '3s',
          animationDuration: '7s'
        }}
      />
      
      <div 
        className="absolute w-16 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent -rotate-30 animate-float-reverse"
        style={{ 
          top: '80%', 
          right: '20%',
          animationDelay: '1.5s',
          animationDuration: '5s'
        }}
      />
      
      {/* Additional decorative elements */}
      <div 
        className="absolute w-20 h-20 border-2 border-primary/3 rounded-full animate-float"
        style={{ 
          top: '15%', 
          left: '70%',
          animationDelay: '4s',
          animationDuration: '8s',
          opacity: 0.3
        }}
      />
      
      <div 
        className="absolute w-6 h-6 border border-primary/4 rotate-12 animate-float-reverse"
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
          backgroundSize: '4rem 4rem',
          mask: 'radial-gradient(circle at center, black 40%, transparent 70%)',
        }}
      />
    </div>
  );
}