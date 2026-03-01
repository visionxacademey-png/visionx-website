import React, { useState, useEffect } from "react";
import "./Home.css";
import TopInternships from "../pages/TopInternships";
import SoftwarePreview from "../components/SoftwarePreview";
import StatsSection from "../components/StatsSection";
import CyberSecurityPreview from "../pages/CyberSecurityPreview.js";
import InternshipPreview from "../components/InternshipPreview.js";
import WorkshopPreview from "../components/WorkshopPreview.js";



import d1 from "../assets/desktop1.png";
import d2 from "../assets/desktop2.png";
import d3 from "../assets/desktop3.png";

import m1 from "../assets/mobile1.png";
import m2 from "../assets/mobile2.png";
import m3 from "../assets/mobile3.png";

function Home() {
  const desktopSlides = [d1, d2, d3];
  const mobileSlides = [m1, m2, m3];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;

  // Auto fade
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="home" id="home">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`fade-slide ${current === index ? "active" : ""}`}
          >
            <img src={slide} alt="poster" />
          </div>
        ))}

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
      <TopInternships />

      <SoftwarePreview />
      <StatsSection />
      <CyberSecurityPreview />
     <div className="learn-cta">
  <div className="marquee">
    <div className="marquee-track">
      <h2>WANT TO LEARN FROM US?</h2>
      <h2>WANT TO LEARN FROM US?</h2>
      <h2>WANT TO LEARN FROM US?</h2>
    </div>
  </div>
</div>

      <InternshipPreview />
      <WorkshopPreview/>
    </section>
  );
}

export default Home;