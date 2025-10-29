
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import "../assets/css/Horizontal.css"

const HorizontalScroll = () => {
  const sectionRef = useRef(null); 
  const panelRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const panels = gsap.utils.toArray(".panel-item");
    const totalPanels = panels.length;

    
    gsap.set(panel, { width: `${totalPanels * 100}vw` });

    const horizontalScroll = gsap.to(panel, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${section.offsetWidth * (totalPanels - 1)}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    return () => {
      horizontalScroll.scrollTrigger.kill();
      horizontalScroll.kill();
    };
  }, []);

  return (
    <section className="horizontal-scroll" ref={sectionRef}>
      <div className="horizontal-panel" ref={panelRef}>
        {[
          {
            title: "Grin Care",
            img: "https://dndesigns.co.in/wp-content/uploads/2025/06/13.jpg",
          },
          {
            title: "Grin Care",
            img: "https://dndesigns.co.in/wp-content/uploads/2025/06/13.jpg",
          },
          {
            title: "Grin Care",
            img: "https://dndesigns.co.in/wp-content/uploads/2025/06/13.jpg",
          },
          {
            title: "Thames",
            img: "https://dndesigns.co.in/wp-content/uploads/2025/06/Thames.jpg",
          },
        ].map((item, index) => (
          <div className="panel-item" key={index}>
            <div className="branding-that-div">
              <img src={item.img} alt={item.title} className="img-fluid" />
              <div className="brand-that-overlay">
                <div className="our-brand-that-content">
                  <h3>{item.title}</h3>
                  <div className="brand-that-buttons">
                    <button>Brand Identity</button>
                    <button>UI/UX</button>
                    <button>Website</button>
                    <button>Strategy</button>
                  </div>
                  <p>
                    For Rithm’s Enlite, a brand with sparkling mineral water and
                    prebiotic drink range, we designed a thoughtful and
                    eye-catching brand identity, including can design, logo
                    design, and character design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScroll;
