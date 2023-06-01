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
    <div className="MyContainer pt-5">
      <Row className="justify-content-center " style={{ width: "100%" }}>
        <Col xs={3}>
          <h5
            className=" text-center"
            style={{
              color: " #9bd339",
              backgroundColor: "black",
              borderBottomLeftRadius: "5rem",
              borderBottomRightRadius: "5rem",
              paddingTop: "0.8rem",
            }}
          >
            {" "}
            <strong>Come funziona</strong>{" "}
          </h5>
        </Col>
      </Row>
      <Row style={{ width: "100%" }}>
        <Col xs={12} md={11} style={{ marginTop: "5em" }}>
          <h4 className="HomeText ms-4">
            <Typewriter
              options={{
                delay: 10,
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
          </h4>
        </Col>
      </Row>
      {showRow1 && (
        <Row className="justify-content-end" style={{ width: "100%" }}>
          <Col xs={12} md={9}>
            <h4 className="HomeText me-4 mt-4">
              <Typewriter
                options={{
                  delay: 10,
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
            </h4>
          </Col>
        </Row>
      )}
      {showRow2 && (
        <Row style={{ width: "100%" }}>
          <Col xs={12} md={12}>
            <h4 className="HomeText ms-4 mt-4">
              <Typewriter
                options={{
                  delay: 10,
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
            </h4>
          </Col>
        </Row>
      )}
      {showRow3 && (
        <Row style={{ width: "100%" }}>
          <Col xs={12} md={7}>
            <h4 className="HomeText ms-4  mt-4">
              <Typewriter
                options={{
                  delay: 10,
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
            </h4>
          </Col>
        </Row>
      )}
      <Row className="justify-content-center" style={{ width: "100%" }}>
        <Col xs={4} md={2}>
          {showButton && (
            <Link className="MyLink text-center" to={"/"}>
              <h3 className=" mt-3 myButton">Prenota ora</h3>
            </Link>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default ComeFunziona;
