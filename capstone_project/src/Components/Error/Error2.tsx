import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error2 = () => {
  return (
    <Row className="mt-5">
      <Col xs={7} className="mt-5 ms-4">
        <Alert variant="success" className="mt-3">
          Impossibile accedere alla pagina, per favore esegua il login.{" "}
          <Link to={"/Login"} style={{ color: "blue" }}>
            {" "}
            Indietro
          </Link>
        </Alert>
      </Col>
    </Row>
  );
};

export default Error2;
