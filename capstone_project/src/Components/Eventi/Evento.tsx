import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_ID,
  searchById,
} from "../../Redux/ActionType/AttivitaSportive";
import ModalModifyEvento from "./ModalModificaEvento";
import { deleteEvento } from "../../Redux/ActionType/Evento";
function Evento() {
  const evento = useSelector((state: RootState) => state?.evento.Evento);
  const dispatch = useDispatch();

  const formatTime = (time: string | number | Date) => {
    const startTime = format(new Date(time), "HH:mm EEEE dd/MM/yyyy");
    return ` ${startTime} `;
  };
  const handlePrenotaClick = async (id: Number) => {
    let data = await searchById(id);
    dispatch({
      type: ATTIVITA_SPORTIVA_FETCH_BY_ID,
      payload: data,
    });
  };

  useEffect(() => {
    const checkAndDeleteEvento = async () => {
      if (
        evento.numeroPartecipanti >=
        evento.attivitaSportiva.numeroMassimoPartecipanti
      ) {
        await deleteEvento(evento.id);
      }
    };

    checkAndDeleteEvento();
  }, [evento]);

  return (
    <div className="MyContainer  pt-5">
      <Container className=" MyAttivita mt-3">
        <Row
          className="justify-content-between"
          style={{ borderBottom: "4px solid white", paddingBottom: "30px" }}
        >
          <Col sm={12} md={6} lg={4}>
            <Col className="mb-4">
              <strong>Sport: </strong> <br />
              {evento?.attivitaSportiva?.tipoDiSport}
            </Col>
            <Col className="mb-4">
              <strong>Attivita: </strong> <br />
              {evento?.attivitaSportiva?.nomeAttivita}
            </Col>
            <Col className="mb-4">
              <strong>Descrizione: </strong> <br />
              {evento?.attivitaSportiva.descrizioneAttivita}
            </Col>
            <Col className="mb-4">
              <strong>Indirizzo: </strong> <br />
              {evento?.attivitaSportiva.indirizzo}
            </Col>
            <Col className="mb-4">
              <strong>Massimo partecipanti: </strong>
              {evento?.attivitaSportiva.numeroMassimoPartecipanti}
            </Col>
            <Link
              to={`/Attivita/${evento?.attivitaSportiva.id}`}
              onClick={() => handlePrenotaClick(evento?.attivitaSportiva.id)}
              className="MyLink"
            >
              <Button id="modal-btn" className="d-flex">
                {" "}
                Dettagli Azienda
              </Button>{" "}
            </Link>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Col className="my-4">
              <strong>Utente: </strong>
              <br />
              {evento?.userCreatore.name.toString()}{" "}
              {evento?.userCreatore.surname.toString()}
            </Col>
            <Col className="mb-5">
              <strong>Email utente: </strong>
              {evento?.userCreatore.email}
            </Col>
            <Col className="mb-5">
              <strong>partecipanti Attuali: </strong>
              {evento?.numeroPartecipanti}
            </Col>
            <Col className="my-5">
              <strong>Orario:</strong>
              <br />
              <p className="mt-2">
                {" "}
                Dalle {formatTime(evento?.orarioInizio)}
              </p>{" "}
              <p> Alle {formatTime(evento?.orarioFine)}</p>
            </Col>
            <Col xs={1} className="mt-1">
              <ModalModifyEvento eventoId={evento} />
            </Col>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12} className="text-center">
            <Link to="/Eventi" className="MyLink">
              <strong> Torna alla pagina Eventi</strong>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Evento;
