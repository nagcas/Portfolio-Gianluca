import "./Page404.css";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <Container className="page__not__found">
      <div className="content">
        <h1>404</h1>
        <h4>Oops! La pagina che stai cercando non esiste.</h4>
        <p>Sembra che tu abbia preso una strada sbagliata nel mio portfolio...</p>
        <p>Non preoccuparti, ti aiuto a tornare al profilo. 😊</p>
        <Link to="/" className="home">
          Torna al profilo
        </Link>
      </div>
    </Container>
  );
}

export default Page404;
