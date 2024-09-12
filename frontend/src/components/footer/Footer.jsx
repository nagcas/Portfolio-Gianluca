import "./Footer.css";

import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-scroll";
import Logo from "../../assets/logo/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex justify-content-center align-items-top">
          <Col sm={12} md={6} lg={3} className="text-center">
            <Link to="hero" className="logo-link mt-4">
              <h5>
                Gianluca
                {" "}<Image src={Logo} alt="Logo" className="logo" />{" "}
                Chiaravalloti
              </h5>
            </Link>
            <p>Da Geometra e Geologo a Web Developer Full Stack: <span className="fw-bold">Il Mio Percorso di Trasformazione</span></p>
          </Col>
          <Col sm={12} md={6} lg={3} className="text-center">
            <Link to="contacts" className="contacts-link mt-4">
              <h5>Contatti</h5>
            </Link>
            <p>Email: studio.nagcas@outlook.it</p>
            <p>telefono: +39 351 8517108</p>
          </Col>
          <Col sm={12} md={6} lg={3} className="text-center">
            <Link to="about" className="about-link mt-4">
              <h5>Chi sono</h5>
            </Link>
            <p>Ogni problema risolto è una sfida vinta</p>
          </Col>
          <Col sm={12} md={6} lg={3} className="text-center mb-3">
            <h5>Seguimi</h5>
            <div className="social-icons mt-4">
              <a
                href="https://github.com/nagcas"
                target="_blank"
                rel="noopener noreferrer"

              >
                <i className="bi bi-github icons__social"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gianluca-chiaravalloti-5694081a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin icons__social"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 border__top">
          <Col className="text-center my-4">
            <p>{currentYear} Portfolio</p>
            <p>by Dott. Gianluca Chiaravalloti</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
