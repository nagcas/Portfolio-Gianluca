import "./Contacts.css";
import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

function Contacts() {
  return (
    <Container id="contacts" className="content__contacts">
      <h2 className="d-flex justify-content-center align-items-center content__title__contacts">
        Contatti
      </h2>
      <Form>
        <Row>
          <Col md={6}>
            <FloatingLabel
              controlId="contact-name"
              label="Inserisci il nome"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="name"
                aria-label=""
                placeholder=""
                //value={contact.name}
                //onChange={handleInputChange}
                //isInvalid={!!errors.name}
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel
              controlId="contact-email"
              label="Inserisci email"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                aria-label=""
                placeholder=""
                //value={contact.email}
                //onChange={handleInputChange}
                //isInvalid={!!errors.email}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel
          controlId="contact-request"
          label="inserisci messaggio"
        >
          <Form.Control
            className="mb-3"
            as="textarea"
            placeholder=""
            style={{ height: "150px" }}
            name="request"
            //value={contact.request}
            //onChange={handleInputChange}
            //isInvalid={!!errors.request}
          />
        </FloatingLabel>
        <Button
          type="submit"
          className="btn__register__form w-100"
          aria-label=""
          //disabled={loading}
        >
        </Button>
      </Form>
    </Container>
  );
}

export default Contacts;
