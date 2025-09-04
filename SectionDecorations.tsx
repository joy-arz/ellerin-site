interface SectionDecorationsProps {
  variant?: 'default' | 'accent' | 'minimal';
  side?: 'left' | 'right' | 'both';
}

export function SectionDecorations({ variant = 'default', side = 'both' }: SectionDecorationsProps) {
  const isLeft = side === 'left' || side === 'both';
  const isRight = side === 'right' || side === 'both';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Default variant decorations */}
      {variant === 'default' && (
        <>
          {isLeft && (
            <>
              {/* Left side floating circle */}
              <div 
                className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border border-primary/5 rounded-full animate-float"
                style={{ 
                  top: '20%', 
                  left: '5%',
                  animationDelay: '2s',
                  animationDuration: '8s',
                  opacity: 0.3
                }}
              />
              
              {/* Left side small dots */}
              <div 
                className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 bg-primary/10 rounded-full animate-float-reverse"
                style={{ 
                  top: '60%', 
                  left: '10%',
                  animationDelay: '4s',
                  animationDuration: '6s'
                }}
              />
              
              <div 
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-primary/8 rounded-full animate-float"
                style={{ 
                  top: '80%', 
                  left: '3%',
                  animationDelay: '1s',
                  animationDuration: '7s'
                }}
              />
            </>
          )}

          {isRight && (
            <>
              {/* Right side geometric line */}
              <div 
                className="absolute w-10 h-px sm:w-12 sm:h-px md:w-16 md:h-px lg:w-20 lg:h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent rotate-45 animate-float"
                style={{ 
                  top: '30%', 
                  right: '8%',
                  animationDelay: '3s',
                  animationDuration: '9s'
                }}
              />
              
              {/* Right side square */}
              <div 
                className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 border border-primary/8 rotate-12 animate-float-reverse"
                style={{ 
                  top: '70%', 
                  right: '5%',
                  animationDelay: '5s',
                  animationDuration: '5s',
                  opacity: 0.3
                }}
              />
              
              <div 
                className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-primary/6 rounded-full animate-float"
                style={{ 
                  top: '15%', 
                  right: '15%',
                  animationDelay: '0.5s',
                  animationDuration: '4s'
                }}
              />
            </>
          )}
        </>
      )}

      {/* Accent variant decorations */}
      {variant === 'accent' && (
        <>
          {isLeft && (
            <>
              {/* Larger accent elements */}
              <div 
                className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 border-2 border-primary/8 rounded-full animate-float"
                style={{ 
                  top: '10%', 
                  left: '3%',
                  animationDelay: '1s',
                  animationDuration: '10s',
                  opacity: 0.3
                }}
              />
              
              <div 
                className="absolute w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full animate-float-reverse"
                style={{ 
                  top: '50%', 
                  left: '8%',
                  animationDelay: '3s',
                  animationDuration: '6s'
                }}
              />
            </>
          )}

          {isRight && (
            <>
              <div 
                className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border border-primary/10 rotate-45 animate-float"
                style={{ 
                  top: '25%', 
                  right: '6%',
                  animationDelay: '2s',
                  animationDuration: '8s',
                  opacity: 0.3
                }}
              />
              
              <div 
                className="absolute w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-primary/12 rounded-full animate-float-reverse"
                style={{ 
                  top: '65%', 
                  right: '12%',
                  animationDelay: '4s',
                  animationDuration: '7s'
                }}
              />
            </>
          )}
        </>
      )}

      {/* Minimal variant decorations */}
      {variant === 'minimal' && (
        <>
          {isLeft && (
            <div 
              className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-primary/15 rounded-full animate-float"
              style={{ 
                top: '40%', 
                left: '10%',
                animationDelay: '2s',
                animationDuration: '5s'
              }}
            />
          )}

          {isRight && (
            <div 
              className="absolute w-8 h-px sm:w-10 sm:h-px md:w-12 md:h-px lg:w-16 lg:h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent rotate-30 animate-float-reverse"
              style={{ 
                top: '60%', 
                right: '10%',
                animationDelay: '3s',
                animationDuration: '6s'
              }}
            />
          )}
        </>
      )}
    </div>
  );
}