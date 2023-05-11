import { Col, Row, Container } from "react-bootstrap";
import Carosello from "./Carosello";

function Home() {
  return (
    <div className="MyContainer pt-5">
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className=" mt-5">
          <Carosello />
        </Col>
      </Row>
      <Container className="HomeContainer">
        <h2 className="HomeText2">PRENOTA ONLINE IL TUO CAMPO DA GIOCO</h2>
        <h3 className="HomeSubtext">
          NON TROVI ABBASTANZA COMPAGNI? NON TI PREOCUPARE, CI PENSIAMO NOI!!
        </h3>
      </Container>
    </div>
  );
}

export default Home;
