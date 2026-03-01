import React, { useEffect, useState, useRef } from "react";
import "./SoftwarePreview.css";
import { useNavigate } from "react-router-dom";
function SoftwarePreview() {
    const navigate = useNavigate();
    const services = [
        {
            title: "Web Development",
            tech: "React • Node.js • MongoDB",
            desc: "Modern, scalable and responsive web applications."
        },
        {
            title: "App Development",
            tech: "Flutter • React Native • Android",
            desc: "Cross-platform and native mobile applications."
        },
        {
            title: "Enterprise Software",
            tech: "Java • Spring Boot • .NET",
            desc: "Secure and high-performance business systems."
        },
        {
            title: "UI/UX Design",
            tech: "Figma • Adobe XD",
            desc: "User-centered interface design solutions."
        },
        {
            title: "Cloud Solutions",
            tech: "AWS • Azure • Docker",
            desc: "Reliable and scalable cloud infrastructure."
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

    /* Detect screen size */
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    /* Auto slide */
    const startAutoSlide = () => {
        autoSlideRef.current = setInterval(() => {
            setIndex(prev => prev + 1);
        }, 3000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(autoSlideRef.current);
    }, []);

    /* Infinite loop reset */
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

    /* Swipe + Drag Support */
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

    /* Transform calculation */
    const translateValue = isMobile
        ? index * 100
        : index * (100 / 3);

    return (
        <section className="software-preview">
            <div className="software-header">
                <h2 className="software-title">Software Services</h2>
                <button
                    className="view-all-btn"
                    onClick={() => navigate("/software")}
                >
                    View All
                </button>
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
                            className={`software-card ${i === index + (isMobile ? 0 : 1)
                                ? "active"
                                : ""
                                }`}
                        >
                            <div className="card-accent"></div>

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

export default SoftwarePreview;