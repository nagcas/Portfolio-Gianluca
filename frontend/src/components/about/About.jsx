import "./About.css";

import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Gianluca from "../../assets/images/gianluca.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

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
  
  return (
    <Container id="about" className="content__about">
      <h2 className="d-flex justify-content-center align-items-center content__title__about">
        Chi sono
      </h2>
      <Row className="d-flex justify-content-between align-items-center">
        <Col data-aos="zoom-out-left" sm={12} md={12} lg={8}>
          <h4>
            Da Geometra e Geologo a Web Developer Full Stack: Il Mio Percorso di
            Trasformazione
          </h4>

          <p className="about__text">
            La mia carriera è iniziata con una solida formazione tecnica come
            geometra, dove ho affinato precisione, problem-solving e attenzione
            ai dettagli. Successivamente, ho conseguito una laurea in Scienze
            Geologiche, che mi ha permesso di ampliare la mia conoscenza del
            territorio e della sua conformazione. Ho lavorato per anni nel
            settore edile e come perito bancario, occupandomi di valutazioni
            immobiliari. Tuttavia, sentivo il bisogno di esplorare nuove sfide.
          </p>

          <p className="about__text">
            La mia passione per la tecnologia, nata con il <span className="fw-bold">Commodore 64</span>, mi ha
            spinto verso il mondo dello sviluppo web. Dopo aver frequentato il
            <span className="fw-bold">bootcamp Epicode</span>, ho imparato a padroneggiare tecnologie come
            React.js e MongoDB, creando progetti come SafeQuake Alert, una
            piattaforma per il monitoraggio sismico in tempo reale.
          </p>

          <p className="about__text">
            Oggi, unisco l'approccio metodico e analitico sviluppato nella mia
            carriera precedente alla creatività del presente, lavorando con
            passione per costruire soluzioni innovative e all'avanguardia.
            Reinventarsi è possibile: tutto parte da una solida base e dal
            desiderio di crescere continuamente.
          </p>

          <p className="about__text float-end">
            Happy, coding
          </p>
        </Col>
        <Col
          data-aos="zoom-out-right"
          sm={12}
          md={12}
          lg={4}
          className="content__foto__profilo"
        >
          <Image
            src={Gianluca}
            alt="Foto Gianluca Chiaravalloti"
            className="foto__profilo"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
