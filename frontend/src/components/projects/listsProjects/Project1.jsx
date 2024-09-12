import { Col, Container, Image, Row } from "react-bootstrap";
import SafeQuakeAlert from "../../../assets/project/safequake-alert-project.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Project1() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="content__lists__projects">
      <Row className="content__projects">
        <Col data-aos="zoom-in-left" md={6}>
        <a
          href="https://safe-quake-alert.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={SafeQuakeAlert}
            alt="SafeQuake Alert"
            className="projects"
          />
        </a>  
        </Col>
        <Col data-aos="zoom-in-right" md={6}>
          <div>
            <p className="text-white fs-5">
              <span className="project__title">SafeQuake Alert</span>
            </p>
            <p className="text-white fs-5">
              è un'applicazione web avanzata sviluppata con
              <span className="fw-bold"> React</span> e <span className="fw-bold">Node.js</span>.
            </p>
            <p className="text-white fs-5">
              Progettata per fornire allerte in tempo reale
              riguardo ai terremoti e offrire consigli su come comportarsi
              durante tali eventi. Il sistema mira a migliorare la sicurezza
              pubblica attraverso notifiche tempestive, informazioni educative e
              news aggiornate.
            </p>

            {/* Tags for SafeQuake Alert */}
            <div className="tags">
              {/* Technology Tags */}
              <span className="tag">
                <i className="bi bi-bootstrap-fill"></i> Bootstrap 5
              </span>
              <span className="tag">
                <i className="bi bi-code-slash"></i> React.js
              </span>
              <span className="tag">
                <i className="bi bi-node-plus-fill"></i> Node.js
              </span>
              <span className="tag">
                <i className="bi bi-mongo"></i> MongoDB
              </span>
              <span className="tag">
                <i className="bi bi-cloud-fill"></i> Cloudinary
              </span>
              <span className="tag">
                <i className="bi bi-diagram-3-fill"></i> Socket.io
              </span>
              <span className="tag">
                <i className="bi bi-database-fill"></i> Firebase
              </span>
              <span className="tag">
                <i className="bi bi-map-fill"></i> Leaflet.js
              </span>

              {/* Functionality Tags */}
              <span className="tag">
                <i className="bi bi-bell-fill"></i> Real-time Alerts
              </span>
              <span className="tag">
                <i className="bi bi-geo-fill"></i> Geolocation
              </span>
              <span className="tag">
                <i className="bi bi-globe"></i> Seismic Monitoring
              </span>
            </div>
          </div>
          <p className="text-white mt-4">
            Scopri di più sul mio progetto visitando la pagina {' '}
            <a
              href="https://safe-quake-alert.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="link__pages"
            >
              SafeQuake Alert
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Project1;