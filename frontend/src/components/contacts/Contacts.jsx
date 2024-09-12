import "./Contacts.css";

import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function Contacts() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const API_URL = "http://localhost:5001";

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formContact, setFormContact] = useState({
    name: "",
    lastname: "",
    email: "",
    message: "",
  });

  // Gestisce i cambiamenti nei campi di input del modulo form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormContact({
      ...formContact,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Funzione di validazione del modulo
  const validate = () => {
    const newErrors = {};
    if (!formContact.name.trim()) {
      newErrors.name = "Devi inserire il tuo nome";
    }
    if (!formContact.lastname.trim()) {
      newErrors.lastname = "Devi inserire il tuo cognome";
    }
    if (!formContact.email.trim()) {
      newErrors.email = "Devi inserire la tua email";
    }
    if (!formContact.message.trim()) {
      newErrors.message = "Devi inserire il tuo messaggio";
    }

    return newErrors;
  };

  // Gestisce l'invio dei dati del modulo
  const handleSaveSubmit = async (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del modulo

    const validationErrors = validate(); // Esegue la validazione del modulo
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Mostra gli errori di validazione
      return;
    };
    setErrors({});
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/contacts-portfolio`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formContact),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from server:", errorData);
        setErrors({
          message: errorData.message || "Errore nell'invio dei dati",
        });
        return;
      };

      setMessage({ type: "success", text: "Messaggio inviato correttamente" }); // Mostra un messaggio di successo

      // Reset del modulo dopo il successo
      setTimeout(() => {
        setFormContact({
          name: "",
          lastname: "",
          email: "",
          message: "",
        });
        setMessage(null); // Rimuove il messaggio di successo
      }, 1500);
    } catch (error) {
      console.error("contact:", error.message);
      setErrors({ email: "Errore nell'invio della email" }); // Mostra un errore specifico per l'email
    } finally {
      setLoading(false); // Nasconde lo spinner di caricamento
    }
  };

  return (
    <Container id="contacts">
      <h2 className="d-flex justify-content-center align-items-center content__title__contacts">
        Contatti
      </h2>
      <Form data-aos="fade-up" onSubmit={handleSaveSubmit} className="content__contacts">
        <Row className="form__contact">
          <Col md={6}>
            <FloatingLabel
              controlId="contact-name"
              label={
                errors.name ? (
                  <span className="text-danger">{errors.name}</span>
                ) : (
                  "Inserisci il nome"
                )
              }
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="name"
                aria-label="Inserisci il tuo nome"
                placeholder="Inserisci il tuo nome"
                value={formContact.name}
                onChange={handleInputChange}
                isInvalid={!!errors.name}
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel
              controlId="contact-lastname"
              label={
                errors.lastname ? (
                  <span className="text-danger">{errors.lastname}</span>
                ) : (
                  "Inserisci il cognome"
                )
              }
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="lastname"
                aria-label="Inserisci il tuo cognome"
                placeholder="inserisci il tuo cognome"
                value={formContact.lastname}
                onChange={handleInputChange}
                isInvalid={!!errors.lastname}
              />
            </FloatingLabel>
          </Col>
          <Col md={12}>
            <FloatingLabel
              controlId="contact-email"
              label={
                errors.email ? (
                  <span className="text-danger">{errors.email}</span>
                ) : (
                  "Inserisci una email"
                )
              }
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                aria-label="Inserisci la tua email"
                placeholder="Inserisci la tua email"
                value={formContact.email}
                onChange={handleInputChange}
                isInvalid={!!errors.email}
              />
            </FloatingLabel>
          </Col>
          <Col md={12}>
            <FloatingLabel
              controlId="contact-message"
              label={
                errors.message ? (
                  <span className="text-danger">{errors.message}</span>
                ) : (
                  "Inserisci il messaggio"
                )
              }
            >
              <Form.Control
                className="mb-3"
                as="textarea"
                placeholder="Inserisci il tuo messaggio"
                aria-label="Inserisci il tuo messaggio"
                style={{ height: "200px" }}
                name="message"
                value={formContact.message}
                onChange={handleInputChange}
                isInvalid={!!errors.message}
              />
            </FloatingLabel>
          </Col>
          <Col md={12}>
            <Button
              type="submit"
              className="btn__send__form w-100"
              aria-label=""
              disabled={loading}
            >
              {loading ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Invia messaggio"
              )}
            </Button>
            {message && (
              <Alert
                variant={message.type}
                className="m-3 text-center"
                aria-live="assertive"
              >
                {message.text}
              </Alert>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Contacts;
