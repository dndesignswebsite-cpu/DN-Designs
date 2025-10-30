import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../assets/css/Horizontal.css"

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ children }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const totalDistance = trackRef.current.scrollWidth - window.innerWidth;
    ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === containerRef.current) {
            trigger.kill();
        }
    });

    const context = gsap.context(() => {
        gsap.to(trackRef.current, {
            x: -totalDistance,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                start: "top top",
                end: `+=${totalDistance}`,
                invalidateOnRefresh: true, 
            },
        });
    }, containerRef);

    return () => context.revert(); 
    
  }, [children]);
  useEffect(() => {
    const handleResize = () => {
        setTimeout(() => {
            ScrollTrigger.refresh(); 
            console.log("ScrollTrigger Refreshed on Resize"); 
        }, 50); 
    };

    
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="horizontal-scroll-container">
      <div ref={trackRef} className="track">
        {children} 
      </div>
    </div>
  );
};

export default HorizontalScroll;