import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error3 = () => {
  return (
    <Row>
      <Col xs={7}>
        <Alert variant="danger" className="mt-3">
          Error 404: Nessun Evento disponibile, Vuoi crearne uno?{" "}
          <Link to={"/Prenotazioni"} style={{ color: "blue" }}>
            {" "}
            Prenotazioni
          </Link>
        </Alert>
      </Col>
    </Row>
  );
};

export default Error3;
