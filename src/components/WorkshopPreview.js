import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./WorkshopPreview.css";

function WorkshopPreview() {
    const navigate = useNavigate();
    const workshops = [
        {
            title: "Advanced React Workshop",
            platform: "React • Hooks • Performance",
            desc: "Deep dive into advanced React patterns and optimization."
        },
        {
            title: "Spring Boot Bootcamp",
            platform: "Java • Spring Boot • REST",
            desc: "Build enterprise backend systems with Spring Boot."
        },
        {
            title: "Ethical Hacking Live",
            platform: "Kali Linux • VAPT",
            desc: "Hands-on penetration testing and vulnerability scanning."
        },
        {
            title: "AI & Machine Learning",
            platform: "Python • ML • TensorFlow",
            desc: "Build intelligent AI systems."
        },
        {
            title: "Cloud Deployment",
            platform: "AWS • Docker • CI/CD",
            desc: "Deploy scalable apps using cloud infrastructure."
        },
        {
            title: "UI/UX Masterclass",
            platform: "Figma • UX Research",
            desc: "Design modern user-focused interfaces."
        }
    ];

    return (
        <section className="workshop-preview">

            <div className="workshop-header">
                <h2>Our Best Services</h2>
                <button className="view-more-btn" onClick={() => navigate("/workshops")}>View More</button>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
            >
                {workshops.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="workshop-card">
                            <h3>{item.title}</h3>
                            <p className="platform">{item.platform}</p>
                            <p className="desc">{item.desc}</p>
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
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}

export default WorkshopPreview;