import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import EpicBooks from "../../../assets/project/epic-books-project.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Project3() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container className="content__lists__projects">
      <Row className="content__projects">
        <Col data-aos="zoom-in-left" md={6}>
        <a
          href="https://github.com/nagcas/PFM-W4D4-EPIC-BOOKS-TESTS--15.06.2024"
          target="_blank"
          rel="noopener noreferrer"
          className="link__pages"
        >
           <Image src={EpicBooks} alt="Strive Blog" className="projects" />
        </a>
        </Col>
        <Col data-aos="zoom-in-right" md={6}>
          <div>
            <p className="text-white fs-5">
              <span className="project__title">Epic Books</span>
            </p>
            <p className="text-white fs-5">
              è un'applicazione web sviluppata con
              <span className="fw-bold"> React</span>
            </p>
            <p className="text-white fs-5">
              Il progetto <span className="fw-bold">"EPIC Books"</span> è un'applicazione web sviluppata con
              React e Bootstrap-react utilizzando "Vite", progettata per gestire
              la visualizzazione dei books e i commenti. Gli utenti possono
              visualizzare, aggiungere, aggiornare ed eliminare commenti sui
              libri. L'applicazione utilizza diverse librerie per gestire il
              frontend e le richieste HTTP.
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
              <span className="tag tag-vite">
                <i className="bi bi-code-slash"></i> Vite
              </span>
              <span className="tag tag-axios">
                <i className="bi bi-code-slash"></i> Axios
              </span>
            </div>
          </div>
          <p className="text-white mt-4">
            Scopri di più sul mio progetto visitando la pagina GitHub{" "}
            <a
              href="https://github.com/nagcas/PFM-W4D4-EPIC-BOOKS-TESTS--15.06.2024"
              target="_blank"
              rel="noopener noreferrer"
              className="link__pages"
            >
              Epic Books
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Project3;
