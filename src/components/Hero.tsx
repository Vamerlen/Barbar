
import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateElements = () => {
      if (headingRef.current) {
        headingRef.current.classList.add("animate-fade-in-up");
        headingRef.current.style.opacity = "1";
      }

      setTimeout(() => {
        if (subheadingRef.current) {
          subheadingRef.current.classList.add("animate-fade-in-up");
          subheadingRef.current.style.opacity = "1";
        }
      }, 300);

      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.classList.add("animate-fade-in-up");
          ctaRef.current.style.opacity = "1";
        }
      }, 600);
    };

    animateElements();
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://images.unsplash.com/photo-1593702288056-f773ed11695a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>

      <div className="section-container relative z-10 text-center text-white">
        <h1 
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0"
          style={{ 
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
            transitionDelay: "0.2s",
            transitionDuration: "0.8s"
          }}
        >
          Premium Barbering Experience <br /> 
          <span className="text-barber-gold">In South Africa</span>
        </h1>
        
        <p 
          ref={subheadingRef}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-0"
          style={{ 
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.5)",
            transitionDelay: "0.4s",
            transitionDuration: "0.8s"
          }}
        >
          Where precision meets passion, creating not just haircuts, but confidence and style for the modern gentleman and women.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row justify-center gap-4 opacity-0"
          style={{ 
            transitionDelay: "0.6s",
            transitionDuration: "0.8s"
          }}
        >
          <a 
            href="#booking" 
            className="btn-primary flex items-center justify-center gap-2 group"
          >
            Book Your Appointment
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a 
            href="#services" 
            className="btn-secondary"
          >
            Explore Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
