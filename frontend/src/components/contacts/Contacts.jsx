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
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

function Contacts() {

  const { t  } = useTranslation('global');

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

  // URL dell'API di backend
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

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
      newErrors.name = t("contacts.devi-inserire-il-tuo-nome");
    }
    if (!formContact.lastname.trim()) {
      newErrors.lastname = t("contacts.devi-inserire-il-tuo-cognome");
    }
    if (!formContact.email.trim()) {
      newErrors.email = t("contacts.devi-inserire-la-tua-email");
    }
    if (!formContact.message.trim()) {
      newErrors.message = t("contacts.devi-inserire-il-tuo-messaggio");
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
          message: errorData.message || t("contacts.errore-nell'invio-dei-dati"),
        });
        return;
      };

      setMessage({ type: "success", text: t("Messaggio inviato correttamente") }); // Mostra un messaggio di successo

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
      setErrors({ email: t("contacts.errore-nell'invio della email") }); // Mostra un errore specifico per l'email
    } finally {
      setLoading(false); // Nasconde lo spinner di caricamento
    }
  };

  return (
    <Container id="contacts">
      <h2 className="d-flex justify-content-center align-items-center content__title__contacts">
        {t("contacts.contatti")}
      </h2>
      <Row className="d-flex justify-content-between align-items-center">
        <Col data-aos="fade-up" sm={12} md={12} lg={4}>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <i className="bi bi-envelope-at-fill icons__email"></i>
            <p className="mt-3 fs-4">
              {t("contacts.gianluca")}
            </p>
            <p className="fs-4">
            {t("contacts.cell")} +39 351 8517108
            </p>
            <p className="fs-4">
            {t("contacts.email")} <span className="fw-bold">studio.nagcas@outlook.it</span>
            </p>
          </div>
        </Col>
        <Col data-aos="fade-up" sm={12} md={12} lg={8}>
          <Form onSubmit={handleSaveSubmit} className="content__contacts">
            <Row className="form__contact">
              <Col md={6}>
                <FloatingLabel
                  controlId="contact-name"
                  label={
                    errors.name ? (
                      <span className="text-danger">{errors.name}</span>
                    ) : (
                      t("contacts.inserisci-il-tuo-nome")
                    )
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="name"
                    aria-label={t("contacts.inserisci-il-tuo-nome")}
                    placeholder={t("contacts.inserisci-il-tuo-nome")}
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
                      t("contacts.inserisci-il-tuo-cognome")
                    )
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="lastname"
                    aria-label={t("contacts.inserisci-il-tuo-cognome")}
                    placeholder={t("contacts.inserisci-il-tuo-cognome")}
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
                      t("contacts.inserisci-la-tua-email")
                    )
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    aria-label={t("contacts.inserisci-la-tua-email")}
                    placeholder={t("contacts.inserisci-la-tua-email")}
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
                      t("contacts.inserisci-il-tuo-messaggio")
                    )
                  }
                >
                  <Form.Control
                    className="mb-3"
                    as="textarea"
                    placeholder={t("contacts.inserisci-il-tuo-messaggio")}
                    aria-label={t("contacts.inserisci-il-tuo-messaggio")}
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
                  variant="outline-light"
                  className="btn__send__form w-100"
                  aria-label={t("contacts.inserisci-il-tuo-messaggio")}
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
                    t("contacts.invia-messaggio")
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
        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
