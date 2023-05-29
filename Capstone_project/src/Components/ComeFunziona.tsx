import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function ComeFunziona() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [showButton, setShowButton] = useState(false);
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleTypewriterComplete = () => {
    setShowButton(true);
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
        <Col xs={10}>
          <h3 className="HomeText ms-4 mt-4">
            <Typewriter
              options={{
                delay: 25,
              }}
              onInit={(typewriter: any) => {
                typewriter
                  .pauseFor(6000)
                  .typeString(
                    "Nessun problema, noi invieremo una notifica a tutti gli iscritti e loro si aggiungeranno alla tua prenotazione"
                  )

                  .start();
              }}
            />
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <h3 className="HomeText ms-4  mt-4">
            <Typewriter
              options={{
                delay: 25,
              }}
              onInit={(typewriter: any) => {
                typewriter
                  .pauseFor(9600)
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
        <Col xs={4} md={2}>
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
