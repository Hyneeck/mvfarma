import { useEffect } from 'react';

// Critical CSS for above-the-fold content
const criticalCSS = `
  .hero-section {
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .loading-skeleton {
    background: linear-gradient(90deg, hsl(var(--muted)) 25%, hsl(var(--muted-foreground)) 50%, hsl(var(--muted)) 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
  }
  
  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  
  .fade-in-fast {
    animation: fadeInFast 0.3s ease-out forwards;
  }
  
  @keyframes fadeInFast {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const CriticalCSS = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);

    return () => {
      const criticalStyle = document.querySelector('style[data-critical]');
      if (criticalStyle) {
        criticalStyle.remove();
      }
    };
  }, []);

  return null;
};

export default CriticalCSS;