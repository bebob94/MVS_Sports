import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import {
  ALL_EVENTI,
  EVENTO_BY_ID,
  deleteEvento,
  eventoById,
  fetchEventi,
} from "../../Redux/ActionType/Evento";
import Error3 from "../Error/Error3";
import { Evento } from "../../Redux/Interfaces";
import { it } from "date-fns/locale";
function Eventi() {
  const Eventi = useSelector((state: RootState) => state?.evento.AllEventi);
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state?.user.user.accessToken);

  useEffect(() => {
    const checkAndDeleteEvento = async (evento: Evento) => {
      const today = new Date();
      const eventStartTime = new Date(evento.orarioInizio);
      if (eventStartTime < today) {
        await deleteEvento(evento.id, token);
      }
    };
    // Effettua il controllo e l'eliminazione per ogni evento
    const checkAndDeleteEventi = async () => {
      if (Eventi && Eventi.length > 0) {
        Eventi.forEach(async (evento: Evento) => {
          await checkAndDeleteEvento(evento);
        });
      }
    };
    checkAndDeleteEventi();
    (async () => {
      let data = await fetchEventi(token);
      dispatch({
        type: ALL_EVENTI,
        payload: data,
      });
    })();
  }, []);

  const handlePrenotaClick = async (id: Number) => {
    let data = await eventoById(id, token);
    dispatch({
      type: EVENTO_BY_ID,
      payload: data,
    });
  };

  const formatTime = (time: string | number | Date) => {
    const startTime = format(new Date(time), "HH:mm EEEE dd/MM/yyyy", {
      locale: it,
    });

    return ` ${startTime} `;
  };

  return (
    <div className="MyContainer pt-5 ">
      <Container className=" MyAttivita ">
        {Eventi && Eventi.length > 0 ? (
          <Row className=" justify-content-around">
            <h2>Eventi disponibili...</h2>
            {Eventi?.map((evento, i) =>
              evento.attivitaSportiva.numeroMassimoPartecipanti >
              evento.numeroPartecipanti ? (
                <Col
                  xs={12}
                  md={3}
                  lg={3}
                  className={`my-5 mx-1 rounded-4 transparent-card`}
                  key={i}
                >
                  <Col className="mb-4">
                    <p className="mt-3">
                      <strong>Sport: </strong> <br />
                      {evento?.attivitaSportiva.tipoDiSport}
                    </p>
                  </Col>
                  <Col className="my-4">
                    <p>
                      <strong>Attività: </strong>
                      <br />
                      {evento?.attivitaSportiva.nomeAttivita.toString()}{" "}
                    </p>
                  </Col>
                  <Col className="my-4">
                    <p>
                      {" "}
                      <strong>Utente: </strong>
                      <br />
                      {evento?.userCreatore.name.toString()}{" "}
                      {evento?.userCreatore.surname.toString()}
                    </p>
                  </Col>
                  <Col className="my-4">
                    <p>
                      {" "}
                      <strong>Orario:</strong>
                      <br />
                      Dalle {formatTime(evento?.orarioInizio)} <br />
                      Alle {formatTime(evento?.orarioFine)}
                    </p>
                  </Col>
                  <Col className="my-4">
                    <p>
                      {" "}
                      <strong>Numero partecipanti:</strong>
                      <br />
                      {evento?.numeroPartecipanti}
                    </p>
                  </Col>
                  <Col className="mt-5">
                    <p>
                      {" "}
                      <strong>Numero massimo partecipanti:</strong>
                      <br />
                      {evento?.attivitaSportiva.numeroMassimoPartecipanti}
                    </p>
                  </Col>
                  <Col className="mt-3 d-flex justify-content-center">
                    <Link
                      to={`/Evento/${evento.id}`}
                      onClick={() => handlePrenotaClick(evento.id)}
                      className="MyLink"
                    >
                      <Button id="modal-btn" className="mb-4">
                        Aggiungiti all'evento
                      </Button>
                    </Link>
                  </Col>
                </Col>
              ) : (
                <React.Fragment key={i}></React.Fragment>
              )
            )}
          </Row>
        ) : (
          <Error3 />
        )}
      </Container>
    </div>
  );
}

export default Eventi;
