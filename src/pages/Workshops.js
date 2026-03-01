import React from "react";
import "./Workshops.css";

function Workshops() {

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
    },
    {
      title: "DevOps Mastery",
      platform: "Docker • Kubernetes • CI/CD",
      desc: "Learn real-world DevOps tools and deployment pipelines."
    },
    {
      title: "Cyber Defense Pro",
      platform: "SIEM • SOC • Threat Analysis",
      desc: "Master enterprise security monitoring techniques."
    }
  ];

  return (
    <section className="workshops-page">

      <div className="workshops-header">
        <h2>All Workshops</h2>
      </div>

      <div className="workshops-list">
        {workshops.map((item, index) => (
          <div className="workshop-card" key={index}>
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
        ))}
      </div>

    </section>
  );
}

export default Workshops;