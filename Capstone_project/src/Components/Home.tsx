import { Col, Row, Container } from "react-bootstrap";

import Carosello from "./Carosello";

function Home() {
  return (
    <div className="MyContainer">
      <Container style={{ paddingTop: "7em" }}>
        <h2 className="HomeText">PRENOTA ONLINE IL TUO CAMPO DA GIOCO</h2>
        <h3 className="HomeText">
          NON TROVI ABBASTANZA COMPAGNI? NON TI PREOCUPARE, CI PENSIAMO NOI!!
        </h3>
      </Container>
      <Row className="justify-content-center mt-5 mb-3">
        <Col xs={4}>
          <Carosello />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
