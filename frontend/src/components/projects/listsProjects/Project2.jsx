import { Col, Container, Image, Row } from "react-bootstrap";
import StriveBlog from "../../../assets/project/strive-blog-project.png";

function Project2() {
  return (
    <Container className="content__lists__projects">
      <Row className="content__projects">
        <Col md={6}>
          <a
            href="https://strive-blog-kappa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image 
              src={StriveBlog} 
              alt="Strive Blog" 
              className="projects" 
            />
          </a>
        </Col>
        <Col md={6}>
          <div>
            <p className="text-white fs-5">
              <span className="project__title">Strive Blog</span>
            </p>
            <p className="text-white fs-5">
              è un'applicazione web sviluppata con
              <span className="fw-bold"> React</span> e{" "}
              <span className="fw-bold">Node.js</span>.
            </p>
            <p className="text-white fs-5">
              Questa app è costruita con il potente stack MERN <span className="fw-bold">(MongoDB,
              Express.js, React, Node.js)</span>. Gli utenti possono registrarsi,
              accedere e creare post sul blog, oppure utilizzare direttamente
              Google o GitHub per accedere. Una volta iscritti, ricevono
              un'email di conferma automatica tramite Mailgun. Ogni utente può
              gestire i propri post, profilo e commentare quelli degli altri,
              oltre a esplorare l'elenco di autori. Il tutto è sviluppato con
              create-react-app di npm!
            </p>

            {/* Tags for SafeQuake Alert */}
            <div class="tags">
              {/* Technology Tags */}
              <span class="tag">
                <i class="bi bi-bootstrap-fill"></i> Bootstrap 5
              </span>
              <span class="tag">
                <i class="bi bi-code-slash"></i> React.js
              </span>
              <span class="tag">
                <i class="bi bi-node-plus-fill"></i> Node.js
              </span>
              <span class="tag">
                <i class="bi bi-mongo"></i> MongoDB
              </span>
              <span class="tag">
                <i class="bi bi-envelope-fill"></i> Mailgun
              </span>
              <span class="tag">
                <i class="bi bi-cloud-fill"></i> Cloudinary
              </span>
            </div>
          </div>
          <p className="text-white mt-4">
            Scopri di più sul mio progetto visitando la pagina {' '}
            <a
              href="https://strive-blog-kappa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="link__pages"
            >
              Strive Blog
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Project2;
