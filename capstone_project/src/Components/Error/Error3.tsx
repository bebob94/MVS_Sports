import { Alert, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../Redux/Store";

const Error3 = () => {
  const user = useSelector((state: RootState) => state?.user.user);
  return (
    <Row>
      {user?.username ? (
        <Col xs={7}>
          <Alert variant="success" className="mt-3">
            Nessuna prenotazione disponibile, vuoi prenotare un campo??{" "}
            <Link to={"/"} style={{ color: "blue" }}>
              {" "}
              Home
            </Link>
          </Alert>
        </Col>
      ) : (
        <Col xs={7}>
          <Alert variant="success" className="mt-3">
            Esegui il{" "}
            <Link to={"/Login"} style={{ color: "blue" }}>
              {" "}
              Login
            </Link>
          </Alert>
        </Col>
      )}
    </Row>
  );
};

export default Error3;
