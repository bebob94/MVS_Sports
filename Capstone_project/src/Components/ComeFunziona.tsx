import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function ComeFunziona() {
  const [showButton, setShowButton] = useState(false);

  const handleTypewriterComplete = () => {
    setShowButton(true);
  };

  return (
    <div className="MyContainer">
      <Row>
        <Col xs={8} style={{ marginTop: "10em" }}>
          <h3 className="HomeText ms-4">
            <Typewriter
              options={{
                delay: 25,
              }}
              onInit={(typewriter: any) => {
                typewriter
                  .typeString(
                    "Decidi lo sport, seleziona il centro sportivo, scegli la data e l'ora che preferisci..."
                  )
                  .start();
              }}
            />
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col xs={6}>
          <h3 className="HomeText me-4 mt-4">
            <Typewriter
              options={{
                delay: 25,
              }}
              onInit={(typewriter: any) => {
                typewriter
                  .pauseFor(3500)
                  .typeString(
                    "Se non riusciamo a raggiungere il numero di giocatori necessari?"
                  )

                  .start();
              }}
            />
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <h3 className="HomeText ms-4 mt-4">
            <Typewriter
              options={{
                delay: 25,
              }}
              onInit={(typewriter: any) => {
                typewriter
                  .pauseFor(6000)
                  .typeString(
                    "Nessun problema, noi ci occuperemo di inviare una notifica a tutti gli utenti iscritti..."
                  )

                  .start();
              }}
            />
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <h3 className="HomeText ms-4">
            <Typewriter
              options={{
                delay: 25,
              }}
              onInit={(typewriter: any) => {
                typewriter
                  .pauseFor(9100)
                  .typeString(
                    "Saranno loro ad aggiungersi alla tua prenotazione!!"
                  )

                  .start();
              }}
            />
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <h3 className="HomeText ms-4">
            <Typewriter
              options={{
                delay: 25,
              }}
              onInit={(typewriter: any) => {
                typewriter
                  .pauseFor(11000)
                  .typeString(
                    "Cosa aspetti? Prenota il tuo campo direttamente da qui!!"
                  )
                  .callFunction(handleTypewriterComplete)
                  .start();
              }}
            />
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={2}>
          {showButton && (
            <Link className="MyLink text-center" to={"/Prenotazioni"}>
              <h3 className="HomeText mt-3 myButton">Prenota ora</h3>
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default ComeFunziona;
