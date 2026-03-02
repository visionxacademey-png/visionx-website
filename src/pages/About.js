import React, { useEffect, useState, useRef } from "react";
import "./About.css";

function About() {

  /* ================= COUNTER ANIMATION ================= */

  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    let y = 0;
    let p = 0;
    let c = 0;

    const interval = setInterval(() => {
      if (y < 3) y++;
      if (p < 2000) p += 50;
      if (c < 300) c += 5;

      setYears(y);
      setProjects(p);
      setClients(c);

      if (y >= 3 && p >= 2000 && c >= 300) {
        clearInterval(interval);
      }
    }, 30);

  }, [startCount]);

  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <h1>About VisionX</h1>
        <p>Empowering Innovation. Securing the Future.</p>
      </div>

      {/* WHO WE ARE */}
      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          VisionX is a next-generation technology company specializing in
          <strong> Software Development</strong>, 
          <strong> Cybersecurity</strong>, and innovative digital products.
        </p>

        <p>
          With over <strong>3 years of industry excellence</strong>, we help 
          startups, enterprises, and institutions transform ideas into 
          scalable, secure, and high-performance digital solutions.
        </p>

        <p>
          Our team blends technical expertise with strategic thinking 
          to deliver impactful technology that drives real business growth.
        </p>
      </div>

      {/* COUNTERS */}
      <div className="about-stats" ref={sectionRef}>
        <div className="stat-box">
          <h3>{years}+</h3>
          <p>Years of Experience</p>
        </div>

        <div className="stat-box">
          <h3>{projects}+</h3>
          <p>Projects Delivered</p>
        </div>

        <div className="stat-box">
          <h3>{clients}+</h3>
          <p>Happy Clients</p>
        </div>
      </div>

      {/* RECOGNITION */}
      <div className="about-section">
        <h2>Recognition & Certifications</h2>
        <p>
          VisionX is officially recognized and certified by prestigious
          government and startup initiatives, validating our commitment
          to quality, innovation, and compliance.
        </p>
      </div>

      {/* ANIMATED LOGOS */}
      <div className="logo-slider">
        <div className="logo-track">
          <div className="logo-item">Kerala Startup Mission</div>
          <div className="logo-item">MSME - Govt of India</div>
          <div className="logo-item">ISO Certified</div>
          <div className="logo-item">Startup India</div>
          <div className="logo-item">Make in India</div>

          {/* duplicate for infinite loop */}
          <div className="logo-item">Kerala Startup Mission</div>
          <div className="logo-item">MSME - Govt of India</div>
          <div className="logo-item">ISO Certified</div>
          <div className="logo-item">Startup India</div>
          <div className="logo-item">Make in India</div>
        </div>
      </div>

      {/* VISION & MISSION */}
      <div className="vision-mission">

        <div className="vm-card1">
          <h3>Our Vision</h3>
          <p>
            To become a globally recognized technology company delivering
            secure, scalable, and innovative digital solutions that
            empower businesses and individuals worldwide.
          </p>
        </div>

        <div className="vm-card">
          <h3>Our Mission</h3>
          <p>
            To provide cutting-edge software development, advanced
            cybersecurity solutions, and industry-ready training programs
            that bridge the gap between education and real-world demands.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;