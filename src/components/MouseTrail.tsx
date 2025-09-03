import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

export default function MouseTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Criar nova partícula
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        scale: 1,
      };

      setParticles(prev => [...prev, newParticle].slice(-20)); // Manter apenas 20 partículas
    };

    // Animar partículas
    const animateParticles = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            opacity: particle.opacity - 0.05,
            scale: particle.scale * 0.95,
          }))
          .filter(particle => particle.opacity > 0)
      );
    };

    const animationInterval = setInterval(animateParticles, 16); // ~60fps
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Cursor personalizado */}
      <div 
        className="absolute w-4 h-4 bg-blue-400 rounded-full mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      
      {/* Partículas do rastro */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-blue-300 rounded-full mix-blend-screen"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
            opacity: particle.opacity,
            transform: `scale(${particle.scale}) translate3d(0, 0, 0)`,
            transition: 'none',
          }}
        />
      ))}
      
      {/* Círculo maior que segue o mouse */}
      <div 
        className="absolute w-8 h-8 border border-blue-300/30 rounded-full transition-all duration-300 ease-out"
        style={{
          left: mousePos.x - 16,
          top: mousePos.y - 16,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </div>
  );
}
