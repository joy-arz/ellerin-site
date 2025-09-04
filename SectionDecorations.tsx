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
                className="absolute w-32 h-32 border border-primary/5 rounded-full animate-float"
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
                className="absolute w-3 h-3 bg-primary/10 rounded-full animate-float-reverse"
                style={{ 
                  top: '60%', 
                  left: '10%',
                  animationDelay: '4s',
                  animationDuration: '6s'
                }}
              />
              
              <div 
                className="absolute w-2 h-2 bg-primary/8 rounded-full animate-float"
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
                className="absolute w-20 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent rotate-45 animate-float"
                style={{ 
                  top: '30%', 
                  right: '8%',
                  animationDelay: '3s',
                  animationDuration: '9s'
                }}
              />
              
              {/* Right side square */}
              <div 
                className="absolute w-16 h-16 border border-primary/8 rotate-12 animate-float-reverse"
                style={{ 
                  top: '70%', 
                  right: '5%',
                  animationDelay: '5s',
                  animationDuration: '5s',
                  opacity: 0.3
                }}
              />
              
              <div 
                className="absolute w-4 h-4 bg-primary/6 rounded-full animate-float"
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
                className="absolute w-40 h-40 border-2 border-primary/8 rounded-full animate-float"
                style={{ 
                  top: '10%', 
                  left: '3%',
                  animationDelay: '1s',
                  animationDuration: '10s',
                  opacity: 0.3
                }}
              />
              
              <div 
                className="absolute w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full animate-float-reverse"
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
                className="absolute w-24 h-24 border border-primary/10 rotate-45 animate-float"
                style={{ 
                  top: '25%', 
                  right: '6%',
                  animationDelay: '2s',
                  animationDuration: '8s',
                  opacity: 0.3
                }}
              />
              
              <div 
                className="absolute w-6 h-6 bg-primary/12 rounded-full animate-float-reverse"
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
              className="absolute w-2 h-2 bg-primary/15 rounded-full animate-float"
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
              className="absolute w-16 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent rotate-30 animate-float-reverse"
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