import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Prenotazioni from "../Attivita/Prenotazioni";

const Error = () => {
  return (
    <Row>
      <Col xs={7}>
        <Alert variant="danger" className="mt-3">
          Error 404: Attività non trovate, per favore ripeta la ricerca.{" "}
          <Link
            to={"/Prenotazioni"}
            onClick={Prenotazioni}
            style={{ color: "blue" }}
          >
            {" "}
            Indietro
          </Link>
        </Alert>
      </Col>
    </Row>
  );
};

export default Error;
