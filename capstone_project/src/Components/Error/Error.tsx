import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Row>
      <Col xs={7}>
        <Alert variant="success" className="mt-3">
          Attività non trovate, per favore effettui il login.{" "}
          <Link to={"/Login"} style={{ color: "blue" }}>
            {" "}
            Login
          </Link>
        </Alert>
      </Col>
    </Row>
  );
};

export default Error;
