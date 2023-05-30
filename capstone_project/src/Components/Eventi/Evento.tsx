import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import ModalModifyEvento from "./ModalModificaEvento";
import { it } from "date-fns/locale";

function Evento() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const evento = useSelector((state: RootState) => state?.evento.Evento);
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const formatTime = (time: string | number | Date) => {
    const startTime = format(new Date(time), "HH:mm EEEE dd/MM/yyyy", {
      locale: it,
    });
    return ` ${startTime} `;
  };
  const handlePrenotaClick = async (id: Number) => {};
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <div className="MyContainer  pt-5">
      <Container className=" MyAttivita mt-3">
        <Row className="justify-content-between transparent-card rounded-4 py-3">
          <Col sm={12} md={6} lg={4} className="ms-4">
            <Col className="mb-4">
              <strong>Sport: </strong> <br />
              {evento?.attivitaSportiva?.tipoDiSport}
            </Col>
            <Col className="mb-4">
              {" "}
              <strong>Attivita: </strong> <br />
              {evento?.attivitaSportiva?.nomeAttivita}
            </Col>
            <Col className="mb-4">
              {" "}
              <strong>Descrizione: </strong> <br />
              {evento?.attivitaSportiva?.descrizioneAttivita}
            </Col>
            <Col className="mb-4">
              <strong>Indirizzo: </strong> <br />
              {evento?.attivitaSportiva?.indirizzo}
            </Col>
            <Col className="mb-4">
              <strong>Massimo partecipanti: </strong>
              {evento?.attivitaSportiva?.numeroMassimoPartecipanti}
            </Col>
            <Link
              to={`/Attivita/${evento?.attivitaSportiva?.id}`}
              onClick={() => handlePrenotaClick(evento?.attivitaSportiva?.id)}
              className="MyLink"
            >
              <Button id="modal-btn" className="d-flex myButton">
                {" "}
                Dettagli Azienda
              </Button>{" "}
            </Link>
          </Col>
          <Col sm={12} md={6} lg={4} className="ms-4">
            <Col className="my-4">
              <strong>Utente: </strong>
              <br />
              {evento?.userCreatore?.name?.toString()}{" "}
              {evento?.userCreatore?.surname?.toString()}
            </Col>
            <Col className="mb-5">
              <strong>Email utente: </strong>
              <br />
              {evento?.userCreatore?.email}
            </Col>
            <Col className="mb-5">
              {" "}
              <strong>partecipanti Attuali: </strong>
              {evento?.numeroPartecipanti}
            </Col>
            <Col className="my-5">
              {" "}
              <strong>Orario:</strong>
              <br />
              Dalle {formatTime(evento?.orarioInizio)}
              <br />
              Alle {formatTime(evento?.orarioFine)}
            </Col>
            <Col xs={1} className="mt-1">
              <ModalModifyEvento eventoId={evento} />
            </Col>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12} className="text-center">
            <Link to="/Eventi" className="navText">
              <strong> Torna alla pagina Eventi</strong>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Evento;
