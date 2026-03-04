import React from "react";
import "./Internship.css";

function Internship() {
  const internships = [
    {
            id: "01",
            title: "Full Stack Development",
            tech: ["React", "Node.js", "MongoDB"],
            desc: "Scalable web applications using modern full-stack technologies."
        },
        {
            id: "02",
            title: "Mobile App Development",
            tech: ["Flutter", "React Native"],
            desc: "High-performance cross-platform mobile applications."
        },
        {
            id: "03",
            title: "Cybersecurity",
            tech: ["Ethical Hacking", "VAPT", "SIEM"],
            desc: "Vulnerability assessment and penetration testing."
        },
        {
            id: "04",
            title: "UI/UX Design",
            tech: ["Figma", "Adobe XD"],
            desc: "Intuitive user experiences and modern interfaces."
        },
        {
            id: "05",
            title: "Cloud Computing",
            tech: ["AWS", "Azure", "Docker"],
            desc: "Deploying and managing scalable cloud infrastructure."
        },
        {
            id: "06",
            title: "Data Science & AI",
            tech: ["Python", "TensorFlow", "ML"],
            desc: "Intelligent systems and real-world AI models."
        },
    {
      id: "07",
      title: "DevOps Engineering",
      tech: ["Docker", "Kubernetes", "CI/CD"],
      desc: "Automate deployment pipelines and manage infrastructure."
    },
    {
      id: "08",
      title: "Blockchain Development",
      tech: ["Solidity", "Web3", "Ethereum"],
      desc: "Decentralized applications and smart contracts."
    },
    {
      id: "09",
      title: "Embedded Systems",
      tech: ["Arduino", "Raspberry Pi", "IoT"],
      desc: "Designing and developing smart hardware-based systems."
    }
  ];

  return (
    <section className="internship-page">

      <div className="internship-page-header">
        <h2>Our Works</h2>
      </div>

      <div className="internship-list">
        {internships.map((item, index) => (
          <div className="internship-card" key={index}>

            <span className="card-number">{item.id}</span>

            <h3>{item.title}</h3>

            <p className="desc">{item.desc}</p>

            <div className="tech-badges">
              {item.tech.map((tech, i) => (
                <span key={i} className="badge">{tech}</span>
              ))}
            </div>

            <div className="card-footer">
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

          </div>
        ))}
      </div>

    </section>
  );
}

export default Internship;