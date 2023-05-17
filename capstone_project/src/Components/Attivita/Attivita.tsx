import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  ATTIVITA_SPORTIVA_FETCH,
  fetchAttivita,
} from "../../Redux/ActionType/AttivitaSportive";
import ModalCreaEvento from "../Eventi/ModalCreaEvento";
import "react-datepicker/dist/react-datepicker.css";
import ModalCreateRecensione from "./ModalCreateRecensione";

function Attivita() {
  const dispatch = useDispatch();

  const Attivita = useSelector(
    (state: RootState) => state.attivitaSportiva?.AttivitaSportiva
  );
  const User = useSelector((state: RootState) => state?.User.user);

  const [showModalPOST, setShowModalPOST] = useState(false);

  const handleShowModalPOST = () => {
    setShowModalPOST(true);
  };
  const handleCloseModalPOST = () => {
    setShowModalPOST(false);
  };

  useEffect(() => {
    (async () => {
      let data = await fetchAttivita();
      console.log(User.id);

      dispatch({
        type: ATTIVITA_SPORTIVA_FETCH,
        payload: data,
      });
    })();
  }, [Attivita]);

  return (
    <div className="MyContainer pt-5">
      <Container className=" MyAttivita">
        <Row>
          <Col xs={6} md={6}>
            <Col xs={8} md={8}>
              <h2>{Attivita?.nomeAttivita}</h2>
              <h4 className="mt-5">Descrizione attività</h4>
              <h5 className="mt-4">{Attivita?.descrizioneAttivita}</h5>
            </Col>
            <Col xs={6} md={6} className="mt-5">
              <h4>Prenota un campo</h4>

              <Col xs={1} className="mt-3">
                <Button
                  style={{ width: "150px" }}
                  onClick={handleShowModalPOST}
                  className=" rounded-4"
                >
                  Prenota un campo
                </Button>
                <ModalCreaEvento
                  show={showModalPOST}
                  handleClose={handleCloseModalPOST}
                  UserId={User?.id}
                  AttivitaId={Attivita?.id}
                />
              </Col>
            </Col>
          </Col>
          <Col xs={6} md={6}>
            <h2>Recensioni attività</h2>
            {Attivita?.recensioni?.map((singRecensione, i) => (
              <div className="my-5" key={i}>
                <h6 className=" d-flex justify-content-between">
                  <p>
                    <strong className="me-4">Utente:</strong>{" "}
                    {singRecensione?.user?.name} {singRecensione?.user?.surname}{" "}
                  </p>
                  <p>
                    <strong className="me-4">Valutazione:</strong>{" "}
                    {singRecensione?.valutazione?.toString()}
                  </p>
                </h6>
                <p className="mb-5">
                  <strong>{singRecensione?.testoRecensione}</strong>
                </p>
              </div>
            ))}
            <Col xs={6} md={6} className="mt-5">
              <h4>Crea una recensione</h4>

              <Col xs={1} className="mt-3">
                <Button
                  style={{ width: "150px" }}
                  onClick={handleShowModalPOST}
                  className=" rounded-4"
                >
                  Crea una recensione
                </Button>
                <ModalCreateRecensione
                  show={showModalPOST}
                  handleClose={handleCloseModalPOST}
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
