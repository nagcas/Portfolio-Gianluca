import "./NavBar.css";
import { useState } from "react";
import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-scroll";
import Logo from "../../assets/logo/logo.png";

function NavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <Navbar expand="lg" className="navbar-dark mb-4 fixed-top p-4 menu__navbar shadow">
      <Container fluid>
        {/* Logo Portfolio */}
        <Navbar.Brand className="fs-2">
          Gianluca
          {" "}<Image src={Logo} alt="Logo" className="logo" />{" "}
          Chiaravalloti
        </Navbar.Brand>

        {/* Toggle Btn */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-lg"
          className="shadow-none border-0"
          onClick={handleShow}
        />

        {/* Sidebar */}
        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="start"
          className="sidebar"
        >
          {/* Sidebar header */}
          <Offcanvas.Header
            className="text-white border-bottom close__white"
            closeButton
          >
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Gianluca
              {" "}<Image src={Logo} alt="Logo" className="logo" />{" "}
              Chiaravalloti
            </Offcanvas.Title>
          </Offcanvas.Header>

          {/* Sidebar body */}
          <Offcanvas.Body className="d-flex flex-column flex-lg-row p-4 p-lg-0">
            <Nav className="d-flex justify-content-center align-items-center flex-grow-1 pe-3">
              <Link
                to="hero"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveLink("hero")}
                className={activeLink === "hero" ? "mx-4 menu__navbar__link nav__menu active" : "mx-4 menu__navbar__link nav__menu"}
                onClick={handleClose}
              >
                Home
              </Link>

              <Link
                to="projects"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveLink("projects")}
                className={activeLink === "projects" ? "mx-4 menu__navbar__link nav__menu active" : "mx-4 menu__navbar__link nav__menu"}
                onClick={handleClose}
              >
                Progetti
              </Link>

              <Link
                to="skills"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveLink("skills")}
                className={activeLink === "skills" ? "mx-4 menu__navbar__link nav__menu active" : "mx-4 menu__navbar__link nav__menu"}
                onClick={handleClose}
              >
                Skills
              </Link>

              <Link
                to="about"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveLink("about")}
                className={activeLink === "about" ? "mx-4 menu__navbar__link nav__menu active" : "mx-4 menu__navbar__link nav__menu"}
                onClick={handleClose}
              >
                Chi sono
              </Link>

              <Link
                to="contacts"
                smooth={true}
                duration={200}
                spy={true}
                offset={-100}
                onSetActive={() => setActiveLink("contacts")}
                className={activeLink === "contacts" ? "mx-4 menu__navbar__link nav__menu active" : "mx-4 menu__navbar__link nav__menu"}
                onClick={handleClose}
              >
                Contatti
              </Link>
            </Nav>
            <div className="d-flex justify-content-center">
              <a
                href="https://github.com/nagcas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github icons__social me-4"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/gianluca-chiaravalloti-5694081a2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin icons__social"></i>
              </a> 
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;


