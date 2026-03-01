import React from "react";
import "./Software.css";

function Software() {

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
    },
    {
      title: "E-Commerce Development",
      tech: "Shopify • MERN • Payment Gateway",
      desc: "Custom online stores with secure payment integration."
    },
    {
      title: "API Development",
      tech: "REST • GraphQL • JWT",
      desc: "Secure and scalable API architecture."
    },
    {
      title: "AI & Machine Learning",
      tech: "Python • TensorFlow • OpenCV",
      desc: "Intelligent systems powered by modern AI technologies."
    },
    {
      title: "DevOps & CI/CD",
      tech: "Docker • GitHub Actions • Kubernetes",
      desc: "Automated deployment and continuous integration pipelines."
    },
    {
      title: "Database Engineering",
      tech: "MySQL • PostgreSQL • MongoDB",
      desc: "Optimized and secure database architecture."
    },
    {
      title: "Custom Software Solutions",
      tech: "Full Stack • Microservices",
      desc: "Tailored software solutions for business needs."
    },
    {
      title: "SaaS Development",
      tech: "Multi-tenant • Cloud • Scalable",
      desc: "Build scalable software-as-a-service platforms."
    }
  ];

  return (
    <section className="software-page">

      <div className="software-header">
        <h2 className="software-title">Software Services</h2>
      </div>

      <div className="software-grid">
        {services.map((service, index) => (
          <div className="software-card" key={index}>
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

    </section>
  );
}

export default Software;