import React from "react";
import "./CyberSecurity.css";

function CyberSecurity() {
    const services = [
        {
            title: "Penetration Testing",
            tech: "OWASP • Kali Linux • Burp Suite",
            desc: "Identify vulnerabilities before attackers do."
        },
        {
            title: "Network Security",
            tech: "Firewalls • IDS/IPS • SIEM",
            desc: "Protect infrastructure from internal and external threats."
        },
        {
            title: "Cloud Security",
            tech: "AWS Shield • Azure Security • IAM",
            desc: "Secure cloud workloads and prevent breaches."
        },
        {
            title: "Security Auditing",
            tech: "Compliance • Risk Analysis • ISO",
            desc: "Comprehensive security assessments and compliance audits."
        },
        {
            title: "Endpoint Protection",
            tech: "EDR • Antivirus • Monitoring",
            desc: "Advanced endpoint monitoring and threat response."
        },
        {
            title: "SOC Monitoring",
            tech: "24/7 Monitoring • SIEM",
            desc: "Real-time threat detection and incident response."
        }
    ];

    return (
        <section className="cyber-page">

            <div className="cyber-page-header">
                <h2>Cybersecurity Services</h2>
            </div>

            <div className="cyber-list">
                {services.map((service, index) => (
                    <div className="cyber-card" key={index}>
                        <div className="cyber-accent"></div>

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

export default CyberSecurity;