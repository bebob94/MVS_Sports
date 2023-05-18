import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import {
  ALL_EVENTI,
  EVENTO_BY_ID,
  eventoById,
  fetchEventi,
} from "../../Redux/ActionType/Evento";
import Error3 from "../Error/Error3";

function Eventi() {
  const Eventi = useSelector((state: RootState) => state?.evento.AllEventi);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let data = await fetchEventi();

      dispatch({
        type: ALL_EVENTI,
        payload: data,
      });
    })();
  }, []);

  const handlePrenotaClick = async (id: Number) => {
    let data = await eventoById(id);
    dispatch({
      type: EVENTO_BY_ID,
      payload: data,
    });
  };

  const formatTime = (time: string | number | Date) => {
    const startTime = format(new Date(time), "HH:mm EEEE dd/MM/yyyy    ");

    return ` ${startTime} `;
  };

  return (
    <div className="MyContainer pt-5">
      <Container className=" MyAttivita">
        {Eventi && Eventi.length > 0 ? (
          <Row className="justify-content-between">
            <h2>Eventi disponibili...</h2>
            {Eventi?.map((evento, i) => (
              <div key={i}>
                {evento.numeroPartecipanti <
                evento.attivitaSportiva.numeroMassimoPartecipanti ? (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    className="mt-4 p-3 rounded-4"
                    style={{ border: "solid 1px white" }}
                  >
                    <Col className="mb-4">
                      <strong>Sport: </strong> <br />
                      {evento?.attivitaSportiva.tipoDiSport}
                    </Col>
                    <Col className="my-5">
                      <strong>Utente: </strong>
                      <br />
                      {evento?.userCreatore.name.toString()}{" "}
                      {evento?.userCreatore.surname.toString()}
                    </Col>
                    <Col className="my-5">
                      <strong>Orario:</strong>
                      <br />
                      Dalle {formatTime(evento?.orarioInizio)} <br />
                      Alle {formatTime(evento?.orarioFine)}
                    </Col>
                    <Col className="my-5">
                      <strong>Numero partecipanti:</strong>
                      <br />
                      {evento?.numeroPartecipanti}
                    </Col>
                    <Col className="mt-5">
                      <strong>Numero massimo partecipanti:</strong>
                      <br />
                      {evento?.attivitaSportiva.numeroMassimoPartecipanti}
                    </Col>
                    <Col className="mt-3 d-flex justify-content-center">
                      <Link
                        to={`/Evento/${evento.id}`}
                        onClick={() => handlePrenotaClick(evento.id)}
                        className="MyLink"
                      >
                        <Button id="modal-btn">Aggiungiti all'evento</Button>
                      </Link>
                    </Col>
                  </Col>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </Row>
        ) : (
          <Error3 />
        )}
      </Container>
    </div>
  );
}

export default Eventi;
