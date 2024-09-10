import "./Skills.css";

import { Col, Container, Row } from "react-bootstrap";

function Skills() {
  return(
    <Container id="skills" className="content__skills">
      <h2 className="d-flex justify-content-center align-items-center content__title__skills">Skills</h2>
    <Row>
      <Col className="skills">
      </Col>
      <Col className="skills">
      </Col>
      <Col className="skills">
      </Col>
    </Row>
    </Container>
  );
};

export default Skills;