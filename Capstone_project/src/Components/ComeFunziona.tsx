import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

function ComeFunziona() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [showButton, setShowButton] = useState(false);
  const [showRow1, setShowRow1] = useState(false);
  const [showRow2, setShowRow2] = useState(false);
  const [showRow3, setShowRow3] = useState(false);

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleTypewriterComplete = () => {
    setShowButton(true);
  };
  const handleshowRow1 = () => {
    setShowRow1(true);
  };
  const handleshowRow2 = () => {
    setShowRow2(true);
  };
  const handleshowRow3 = () => {
    setShowRow3(true);
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
                  .callFunction(handleshowRow1)
                  .start();
              }}
            />
          </h3>
        </Col>
      </Row>
      {showRow1 && (
        <Row className="justify-content-end">
          <Col xs={6}>
            <h3 className="HomeText me-4 mt-4">
              <Typewriter
                options={{
                  delay: 25,
                }}
                onInit={(typewriter: any) => {
                  typewriter

                    .typeString(
                      "Se non riusciamo a raggiungere il numero di giocatori necessari?"
                    )
                    .callFunction(handleshowRow2)
                    .start();
                }}
              />
            </h3>
          </Col>
        </Row>
      )}
      {showRow2 && (
        <Row>
          <Col xs={10}>
            <h3 className="HomeText ms-4 mt-4">
              <Typewriter
                options={{
                  delay: 25,
                }}
                onInit={(typewriter: any) => {
                  typewriter

                    .typeString(
                      "Nessun problema, noi invieremo una notifica a tutti gli iscritti e loro si aggiungeranno alla tua prenotazione"
                    )
                    .callFunction(handleshowRow3)
                    .start();
                }}
              />
            </h3>
          </Col>
        </Row>
      )}
      {showRow3 && (
        <Row>
          <Col xs={6}>
            <h3 className="HomeText ms-4  mt-4">
              <Typewriter
                options={{
                  delay: 25,
                }}
                onInit={(typewriter: any) => {
                  typewriter

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
      )}
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
