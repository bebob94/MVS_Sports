import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Prenotazioni from "./Prenotazioni";

function ComeFunziona() {
  return (
    <div className="MyContainer">
      <Row>
        <Col xs={8} style={{ marginTop: "15em" }}>
          <h3 className="HomeText ms-4">
            decidi lo sport, seleziona il centro sportivo, scegli la data e
            l'ora che preferisci...
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-end">
        {" "}
        <Col xs={6}>
          <h3 className="HomeText me-4 mt-4">
            Se non raggiungiamo il numero di giocatori necessari??{" "}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <h3 className="HomeText ms-4 mt-4">
            nessun problema, noi ci occuperemo di inviare una notifica a tutti
            gli utenti iscritti...
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <h3 className="HomeText ms-4 ">
            Saranno loro ad aggiungersi alla tua prenotazione!!
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <h3 className="HomeText ms-4 ">
            Cosa aspetti vai a prenotare il Tuo Campo direttamente da qua!!
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={2}>
          <Link
            className="MyLink text-center "
            to={"/Prenotazioni"}
            onClick={Prenotazioni}
          >
            <h3 className="HomeText mt-5 myButton">Prenota ora</h3>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
export default ComeFunziona;
