import React, { useEffect, useState, useRef } from "react";
import "./CyberSecurityPreview.css";
import { useNavigate } from "react-router-dom";
function CyberSecurityPreview() {
  const navigate = useNavigate();
  const services = [
    {
      title: "Network Security",
      tech: "Firewall • IDS • VPN",
      desc: "Protecting infrastructure with advanced threat prevention systems."
    },
    {
      title: "Penetration Testing",
      tech: "Ethical Hacking • VAPT",
      desc: "Identifying vulnerabilities before attackers exploit them."
    },
    {
      title: "Cloud Security",
      tech: "AWS Security • Azure Defender",
      desc: "Securing cloud workloads and enterprise environments."
    },
    {
      title: "Data Protection",
      tech: "Encryption • Compliance",
      desc: "Ensuring sensitive data remains secure and compliant."
    },
    {
      title: "SOC Monitoring",
      tech: "24/7 Monitoring • SIEM",
      desc: "Real-time threat detection and incident response."
    }
  ];

  const looped = [
    services[services.length - 1],
    ...services,
    services[0]
  ];

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const sliderRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const autoSlideRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideRef.current);
  }, []);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (index === looped.length - 1) {
        setTransition(false);
        setIndex(1);
      }
      if (index === 0) {
        setTransition(false);
        setIndex(looped.length - 2);
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener("transitionend", handleTransitionEnd);

    return () =>
      slider.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, looped.length]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        setTransition(true);
      });
    }
  }, [transition]);

  const handleStart = e => {
    clearInterval(autoSlideRef.current);
    isDragging.current = true;
    startX.current =
      e.type === "touchstart"
        ? e.touches[0].clientX
        : e.clientX;
  };

  const handleEnd = e => {
    if (!isDragging.current) return;

    const endX =
      e.type === "touchend"
        ? e.changedTouches[0].clientX
        : e.clientX;

    const diff = startX.current - endX;

    if (diff > 50) setIndex(prev => prev + 1);
    else if (diff < -50) setIndex(prev => prev - 1);

    isDragging.current = false;
    startAutoSlide();
  };

  const translateValue = isMobile
    ? index * 100
    : index * (100 / 3);

  return (
    <section className="cyber-preview">

      <div className="cyber-header">
        <h2 className="cyber-title">Cyber Security Services</h2>
        <button className="view-all-btn" onClick={() => navigate("/cybersecurity")}>View All</button>
      </div>

      <div
        className="carousel-container"
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        <div
          className="carousel-track"
          ref={sliderRef}
          style={{
            transform: `translateX(-${translateValue}%)`,
            transition: transition ? "transform 0.8s ease" : "none"
          }}
        >
          {looped.map((service, i) => (
            <div
              key={i}
              className={`software-card ${i === index + (isMobile ? 0 : 1) ? "active" : ""
                }`}
            >
              <div className="card-accent cyber-accent"></div>

              <h3>{service.title}</h3>

              <p className="tech">{service.tech}</p>

              <p className="desc">{service.desc}</p>

              <a
                href="https://wa.me/919074450935"
                target="_blank"
                rel="noopener noreferrer"
                text-decoration="none"
                className="details-btn"
              >
                More Details
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default CyberSecurityPreview;