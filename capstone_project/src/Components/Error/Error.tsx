import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Row>
      <Col xs={7}>
        <Alert variant="success" className="mt-3">
          Attività non trovate, per favore effettui il login o ripeta la
          ricerca.{" "}
          <Link to={"/"} style={{ color: "blue" }}>
            {" "}
            Home
          </Link>
        </Alert>
      </Col>
    </Row>
  );
};

export default Error;
