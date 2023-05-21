import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  ATTIVITA_SPORTIVA_FETCH,
  fetchAttivita,
} from "../../Redux/ActionType/AttivitaSportive";
import ModalCreaEvento from "./ModalCreaEvento";
import "react-datepicker/dist/react-datepicker.css";
import ModalCreateRecensione from "./ModalCreateRecensione";

function Attivita() {
  const dispatch = useDispatch();

  const Attivita = useSelector(
    (state: RootState) => state.attivitaSportiva?.AttivitaSportiva
  );
  const User = useSelector((state: RootState) => state?.User.user);

  useEffect(() => {
    (async () => {
      let data = await fetchAttivita();
      console.log(User?.id);

      dispatch({
        type: ATTIVITA_SPORTIVA_FETCH,
        payload: data,
      });
    })();
  }, [Attivita]);

  const formatTime = (time: string) => {
    return time.substring(0, 5); // Estrae i primi 5 caratteri della stringa
  };

  return (
    <div className="MyContainer py-5">
      <Container className="MyAttivita mt-5">
        <Row
          className="py-5 px-5 rounded-4"
          style={{ backgroundColor: "rgba(92, 88, 88, 0.822)" }}
        >
          <Col xs={6} md={6}>
            <Col xs={8} md={8}>
              <h1 className="mb-4">{Attivita?.nomeAttivita}</h1>
              <h4 className="mt-5">Descrizione attività:</h4>
              <p>{Attivita?.descrizioneAttivita}</p>
              <h4 className="mt-4">Sport:</h4>
              <p>{Attivita?.tipoDiSport}</p>
              <h4 className="mt-4">Orario Apertura:</h4>
              <p>{formatTime(Attivita?.orarioApertura.toString())}</p>
              <h4 className="mt-4">Orario chiusura</h4>
              <p>{formatTime(Attivita?.orarioChiusura.toString())}</p>
              <h4 className="mt-4">
                Numero massimo partecipanti:{" "}
                {Attivita?.numeroMassimoPartecipanti}
              </h4>
            </Col>
            <Col xs={6} md={6} className="mt-5">
              <h4>Prenota un campo</h4>

              <Col xs={1} className="mt-3">
                <ModalCreaEvento UserId={User?.id} AttivitaId={Attivita?.id} />
              </Col>
            </Col>
          </Col>
          <Col xs={6} md={6}>
            <h2 className="mt-5">Recensioni attività</h2>
            {Attivita?.recensioni?.map((singRecensione, i) => (
              <div className="my-5" key={i}>
                <h6>
                  <p className="mb-3">
                    <strong>Utente:</strong>
                    <br /> {singRecensione?.user?.name}{" "}
                    {singRecensione?.user?.surname}{" "}
                  </p>
                  <p className="mb-3">
                    <strong>Valutazione:</strong>
                    {"      "}
                    {singRecensione?.valutazione?.toString()}
                  </p>
                </h6>
                <p className="mb-5">
                  <strong>Testo recensione:</strong>
                  <br />
                  <strong>{singRecensione?.testoRecensione}</strong>
                </p>
              </div>
            ))}
            <Col xs={6} md={6} style={{ marginTop: "10em" }}>
              <h4>Crea una recensione</h4>

              <Col xs={1} className="mt-3">
                <ModalCreateRecensione
                  UserId={User?.id}
                  AttivitaId={Attivita?.id}
                />
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Attivita;
