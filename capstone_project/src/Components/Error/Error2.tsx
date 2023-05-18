import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Prenotazioni from "../Attivita/Prenotazioni";
import Login from "../login_&_register/Login";

const Error2 = () => {
  return (
    <Row className="mt-5">
      <Col xs={7} className="mt-5 ms-4">
        <Alert variant="danger" className="mt-3">
          Error 404: Impossibile accedere alla pagina, per favore esegua il
          login.{" "}
          <Link to={"/Logini"} onClick={Login} style={{ color: "blue" }}>
            {" "}
            Indietro
          </Link>
        </Alert>
      </Col>
    </Row>
  );
};

export default Error2;
