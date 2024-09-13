import "./PrivacyPolicy.css";

import { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function PrivacyPolicy() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  return (
    <>
      <Button
        variant="outline-primary"
        onClick={handleShow}
        className="btn__privacy"
      >
        Privacy & Cookie Policy
      </Button>
      <Offcanvas
        data-aos="flip-up"
        show={show}
        onHide={handleClose}
        placement="modal-fullscreen"
        className="modal-fullscreen content__privacy"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h1>Privacy & Cookie Policy</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <header>
            <p>Data di entrata in vigore: 13/09/2024</p>
          </header>

          <section>
            <h2>1. Introduzione</h2>
            <p>
              Questa Privacy Policy descrive come raccogliamo, utilizziamo e
              proteggiamo le informazioni personali degli utenti del sito{" "}
              <span className="fw-bold">[https://tuo-sito.com](https://tuo-sito.com)</span>.
            </p>
          </section>

          <section>
            <h2>2. Informazioni che raccogliamo</h2>
            <h3>Informazioni fornite volontariamente</h3>
            <p>
              Quando utilizzi il modulo di contatto, raccogliamo informazioni
              come:
            </p>
            <ul>
              <li>Nome</li>
              <li>Cognome</li>
              <li>Indirizzo email</li>
              <li>Messaggio inviato</li>
            </ul>

            <h3>Dati di navigazione</h3>
            <p>
              Raccogliamo automaticamente informazioni come l'indirizzo IP, il
              tipo di browser e le pagine visitate tramite cookie e tecnologie
              simili.
            </p>
          </section>

          <section>
            <h2>3. Utilizzo delle informazioni</h2>
            <p>
              Le informazioni raccolte sono utilizzate per rispondere alle
              richieste degli utenti e migliorare l'esperienza di navigazione
              del sito.
            </p>
          </section>

          <section>
            <h2>4. Condivisione delle informazioni</h2>
            <p>
              Non vendiamo o condividiamo le tue informazioni personali con
              terze parti, salvo obblighi legali.
            </p>
          </section>

          <section>
            <h2>5. Sicurezza delle informazioni</h2>
            <p>
              Adottiamo misure di sicurezza per proteggere le tue informazioni
              personali. Tuttavia, nessun sistema online è sicuro al 100%.
            </p>
          </section>

          <section>
            <h2>6. Diritti degli utenti</h2>
            <p>
              Hai il diritto di accedere, rettificare o cancellare i tuoi dati
              personali, così come altri diritti ai sensi del GDPR.
            </p>
          </section>

          <section>
            <h2>7. Modifiche alla Privacy Policy</h2>
            <p>
              Ci riserviamo il diritto di modificare questa Privacy Policy in
              qualsiasi momento. Le modifiche saranno pubblicate su questa
              pagina.
            </p>
          </section>

          <section>
            <h2>8. Contatti</h2>
            <p>
              Per qualsiasi domanda riguardo alla Privacy Policy, puoi
              contattarci all'indirizzo{" "}
              <a href="mailto:studio.nagcas@outlook.it">studio.nagcas@outlook.it</a>.
            </p>
          </section>

          <hr />

          <section>
            <h2>Cookie Policy</h2>
            <p>
              Utilizziamo cookie per migliorare la tua esperienza di
              navigazione. I cookie sono piccoli file di testo che vengono
              memorizzati sul tuo dispositivo.
            </p>

            <h3>Tipologie di cookie utilizzati</h3>
            <ul>
              <li>
                <span className="fw-bold">Cookie tecnici:</span> Essenziali per il corretto
                funzionamento del sito.
              </li>
              <li>
                <span className="fw-bold">Cookie analitici:</span> Utilizzati per raccogliere
                dati anonimi sulle modalità di utilizzo del sito.
              </li>
              <li>
                <span className="fw-dolc">Cookie di terze parti:</span> Potrebbero essere
                impostati da strumenti di terze parti, come i pulsanti di
                condivisione social.
              </li>
            </ul>

            <h3>Gestione dei cookie</h3>
            <p>
              Puoi gestire i cookie direttamente dal tuo browser. Ecco alcuni
              link utili per modificare le impostazioni dei cookie:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=it"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/it-it/help/4027947/microsoft-edge-delete-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default PrivacyPolicy;
