import { useEffect, useRef } from 'react';

const BubbleAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
    `;
    container.appendChild(particleContainer);

    // Create floating orbs
    const createFloatingOrb = (size: number, top: string, left: string, delay: number) => {
      const orb = document.createElement('div');
      orb.className = 'floating-orb';
      orb.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1));
        filter: blur(1px);
        animation: float 6s ease-in-out infinite;
        animation-delay: ${delay}s;
        pointer-events: none;
        top: ${top};
        left: ${left};
        border-radius: 50%;
      `;
      particleContainer.appendChild(orb);
    };

    // Add floating orbs with randomized positions
    createFloatingOrb(100, `${Math.random() * 60 + 20}%`, `${Math.random() * 80 + 10}%`, 0);
    createFloatingOrb(150, `${Math.random() * 60 + 20}%`, `${Math.random() * 80 + 10}%`, 2);
    createFloatingOrb(80, `${Math.random() * 60 + 20}%`, `${Math.random() * 80 + 10}%`, 4);

    // Create small particles with random amount (30-80 bubbles)
    const particleCount = Math.floor(Math.random() * 51) + 30; // Random between 30-80
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 6 + 2; // Random size between 2-8px
      const duration = Math.random() * 20 + 10; // Random duration between 10-30s (matching original)
      const delay = Math.random() * 5; // Random delay between 0-5s (matching original)
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.8), rgba(16, 185, 129, 0.4));
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation: particle-float ${duration}s infinite ease-in-out;
        animation-delay: ${delay}s;
      `;
      particleContainer.appendChild(particle);
    }

    // Add CSS animations (matching enhanced_portfolio.html style)
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      
      @keyframes particle-float {
        0%, 100% {
          transform: translate(0, 0) rotate(0deg);
          opacity: 0;
        }
        10%, 90% {
          opacity: 1;
        }
        50% {
          transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(180deg);
        }
      }
    `;
    document.head.appendChild(style);

    // Mouse tracking effect
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateMouseEffect = () => {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      const orbs = particleContainer.querySelectorAll('.floating-orb');
      const particles = particleContainer.querySelectorAll('div:not(.floating-orb)');
      
      // Update floating orbs - move away from mouse
      orbs.forEach((orb) => {
        const element = orb as HTMLElement;
        const rect = element.getBoundingClientRect();
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(targetX - elementCenterX, 2) + 
          Math.pow(targetY - elementCenterY, 2)
        );
        const maxDistance = 200;
        const influence = Math.max(0, 1 - distance / maxDistance);
        
        // Calculate direction away from mouse
        const deltaX = elementCenterX - targetX;
        const deltaY = elementCenterY - targetY;
        const magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (magnitude > 0) {
          const normalizedX = deltaX / magnitude;
          const normalizedY = deltaY / magnitude;
          
          const moveX = normalizedX * influence * 15;
          const moveY = normalizedY * influence * 15;
          
          element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      });

        // Update small particles - move away from mouse
        particles.forEach((particle) => {
          const element = particle as HTMLElement;
          const rect = element.getBoundingClientRect();
          const elementCenterX = rect.left + rect.width / 2;
          const elementCenterY = rect.top + rect.height / 2;
          
          const distance = Math.sqrt(
            Math.pow(targetX - elementCenterX, 2) + 
            Math.pow(targetY - elementCenterY, 2)
          );
          const maxDistance = 120;
          const influence = Math.max(0, 1 - distance / maxDistance);
          
          // Calculate direction away from mouse
          const deltaX = elementCenterX - targetX;
          const deltaY = elementCenterY - targetY;
          const magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          
          if (magnitude > 0) {
            const normalizedX = deltaX / magnitude;
            const normalizedY = deltaY / magnitude;
            
            const moveX = normalizedX * influence * 8;
            const moveY = normalizedY * influence * 8;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
          }
        });
      
      requestAnimationFrame(updateMouseEffect);
    };

    document.addEventListener('mousemove', handleMouseMove);
    updateMouseEffect();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (container.contains(particleContainer)) {
        container.removeChild(particleContainer);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bubble-container"
      style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: 'transparent',
      }}
    />
  );
};

export default BubbleAnimation;
