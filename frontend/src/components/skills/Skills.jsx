import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";

function Skills() {

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      const isScreenLarge = window.innerWidth >= 768;
      if (isScreenLarge !== isLargeScreen) {
        setIsLargeScreen(isScreenLarge);
      }
    };

    // Aggiungi l'evento di resize
    window.addEventListener("resize", handleResize);

    // Cleanup: rimuovi il listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isLargeScreen]);

  useEffect(() => {
    if (isLargeScreen) {
      AOS.init({ duration: 1000 });
    } else {
      AOS.refreshHard(); // Pulisce completamente AOS
      AOS.init({ disable: true }); // Disabilita AOS su dispositivi piccoli
    }
  }, [isLargeScreen]);

  const skills = [
    {
      name: "HTML5, CSS3, JavaScript (ES6+)",
      percentage: 90,
      icon: "bi-code-slash"
    },
    {
      name: "React.js",
      percentage: 85,
      icon: "bi-layers"
    },
    {
      name: "Node.js, Express",
      percentage: 80,
      icon: "bi-node-plus"
    },
    {
      name: "MongoDB, Firebase",
      percentage: 85,
      icon: "bi-database"
    },
    {
      name: "Git, GitHub, Version Control",
      percentage: 90,
      icon: "bi-git"
    },
    {
      name: "Socket.io, WebSockets",
      percentage: 75,
      icon: "bi-broadcast"
    },
    {
      name: "Chart.js, Leaflet (Data Visualization)",
      percentage: 70,
      icon: "bi-graph-up"
    },
    {
      name: "JWT, Bcrypt (Authentication & Security)",
      percentage: 80,
      icon: "bi-shield-lock"
    },
    {
      name: "Bootstrap 5",
      percentage: 90,
      icon: "bi-bootstrap"
    },
    {
      name: "React-Hot-Toast",
      percentage: 80,
      icon: "bi-chat-dots"
    },
    {
      name: "Telegraf",
      percentage: 75,
      icon: "bi-telegram"
    },
    {
      name: "Cloudinary (Image & Video Management)",
      percentage: 85,
      icon: "bi-cloud"
    }
  ];

  return (
    <Container id="skills" className="content__skills">
      <h2 className="d-flex justify-content-center align-items-center content__title__skills">
        Skills
      </h2>
      <Row className="d-flex justify-content-center align-items-center gap-4">
        {skills.map((skill, index) => (
          <Col
            md={4}
            className="skills"
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <i className={`bi ${skill.icon} skill-icon`}></i> {/* Icona Bootstrap */}
            <div className="skill-bar">
              <div className="fill" style={{ width: `${skill.percentage}%` }}>
                {skill.percentage}%
              </div>
            </div>
            <p>{skill.name}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;

