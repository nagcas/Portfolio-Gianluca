import "./About.css";

import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Gianluca from "../../assets/images/gianluca.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container id="about" className="content__about">
      <h2 className="d-flex justify-content-center align-items-center content__title__about">
        Chi sono
      </h2>
      <Row className="d-flex justify-content-between align-items-center">
        <Col data-aos="zoom-out-left" md={8}>
          <h4>
            Da Geometra e Geologo a Web Developer Full Stack: Il Mio Percorso di
            Trasformazione
          </h4>

          <p>
            La mia carriera ha avuto inizio con una solida formazione tecnica
            come geometra, un ruolo che mi ha permesso di sviluppare competenze
            fondamentali come precisione, problem-solving e attenzione ai
            dettagli. Ho lavorato per anni nel settore edile, occupandomi di
            progettazione e rilievi topografici, e ho avuto anche l'opportunità
            di prestare servizio come perito bancario, valutando immobili per
            garantire accuratezza e affidabilità nelle transazioni finanziarie.
          </p>

          <p>
            Nonostante i successi in questi campi, sentivo che mancava qualcosa.
            Avevo il desiderio di esplorare nuove sfide e orizzonti, e così è
            nato il mio interesse per la programmazione e lo sviluppo web, una
            passione che ha radici lontane, fin dai tempi in cui scoprii il
            Commodore 64.
          </p>

          <p>
            Cambiare carriera non è stato facile, ma ho accettato la sfida. Ho
            frequentato il bootcamp Epicode, dove ho appreso tecnologie come
            React.js e MongoDB, che mi hanno permesso di creare soluzioni
            innovative. Uno dei progetti di cui sono più fiero è SafeQuake
            Alert, una piattaforma per monitorare gli eventi sismici in tempo
            reale.
          </p>

          <p>
            Questo passaggio dal mondo edilizio a quello digitale non ha
            rappresentato solo un cambiamento di strumenti, ma una vera e
            propria trasformazione. Le competenze analitiche e metodiche che
            avevo sviluppato come geometra e perito bancario si sono rivelate
            fondamentali nel mio nuovo percorso.
          </p>

          <p>
            Oggi mi muovo tra due mondi: quello concreto della progettazione
            fisica e quello dinamico dello sviluppo software. Ogni riga di
            codice è come un progetto che prende forma, e ogni problema risolto
            è una sfida vinta.
          </p>

          <p>
            Se c’è una cosa che ho imparato, è che non è mai troppo tardi per
            reinventarsi. Che si tratti di un edificio o di un’applicazione web,
            tutto inizia da una solida base, fatta di passione e desiderio di
            innovare e crescere continuamente.
          </p>
        </Col>
        <Col data-aos="zoom-out-right" md={4} className="content__foto__profilo">
          <Image src={Gianluca} alt="Foto Gianluca Chiaravalloti" className="foto__profilo" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
