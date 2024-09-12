import "./Projects.css";

import { Container, Row } from "react-bootstrap";
import Project1 from "./listsProjects/Project1";
import Project2 from "./listsProjects/Project2";
import Project3 from "./listsProjects/Project3";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  return (
    <Container id="projects">
      <h2 className="content__title__projects">I miei progetti</h2>
      <Project1 />
      <Project2 />
      <Project3 />
    </Container>
  );
}

export default Projects;
