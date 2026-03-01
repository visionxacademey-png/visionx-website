import React, { useEffect, useRef, useState } from "react";
import "./StatsSection.css";

function StatsSection() {
  const [startCount, setStartCount] = useState(false);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  const sectionRef = useRef(null);

  const targetProjects = 2000;
  const targetClients = 300;

  /* Trigger when section enters viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* Counter Animation */
  useEffect(() => {
    if (!startCount) return;

    const duration = 2000;

    const animateCounter = (setter, target) => {
      let start = 0;
      const increment = target / (duration / 20);

      const counter = setInterval(() => {
        start += increment;

        if (start >= target) {
          setter(target);
          clearInterval(counter);
        } else {
          setter(Math.floor(start));
        }
      }, 20);
    };

    animateCounter(setProjects, targetProjects);
    animateCounter(setClients, targetClients);

  }, [startCount]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">

        {/* PROJECTS BOX */}
        <div className="stats-box projects-box">
          <h2 className="stats-number">{projects}+</h2>
          <p className="stats-title">Successful Projects</p>
          <p className="stats-desc">
            We deliver scalable and secure solutions tailored to business needs.
          </p>
        </div>

        {/* CLIENTS BOX */}
        <div className="stats-box clients-box">
          <h2 className="stats-number">{clients}+</h2>
          <p className="stats-title">Happy Clients</p>
          <p className="stats-desc">
            Trusted by startups and enterprises worldwide for innovation.
          </p>
        </div>

      </div>
    </section>
  );
}

export default StatsSection;