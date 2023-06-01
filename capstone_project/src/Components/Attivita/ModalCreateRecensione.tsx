import React, { useState } from "react";
import { Button, Row, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NewRecensione } from "../../Redux/Interfaces";
import {
  ALL_RECENSIONI,
  CreaRecensione,
  fetchRecensioni,
} from "../../Redux/ActionType/Recensioni";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_ID,
  searchById,
} from "../../Redux/ActionType/AttivitaSportive";
import StarRatings from "react-star-ratings";
import { RootState } from "../../Redux/Store";

const ModalCreateRecensione = ({
  UserId,
  AttivitaId,
}: {
  UserId: number;
  AttivitaId: number;
}) => {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  const [valutazione, setValutazione] = useState<number>(0);
  const [testoRecensione, setTestoRecensione] = useState<string>("");
  const [show, setShow] = useState(false);
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  // Modifica valutazione recensione
  const handlevalutazioneChange = (rate: number) => {
    setValutazione(rate);
  };
  // Modifica testo recensione
  const handleTestoRecensioneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTestoRecensione(e.target.value);
  };

  // Spedizione dati
  const handleSubmit = async () => {
    const payload: NewRecensione = {
      valutazione: valutazione,
      testoRecensione: testoRecensione,
    };
    let newRecensione = await CreaRecensione(
      payload,
      UserId,
      AttivitaId,
      token
    );
    let data = await fetchRecensioni(token);
    let data2 = await searchById(AttivitaId, token);
    console.log(data2);
    dispatch({
      type: ALL_RECENSIONI,
      payload: data,
    });
    dispatch({
      type: ATTIVITA_SPORTIVA_FETCH_BY_ID,
      payload: data2,
    });
    setValutazione(0);
    setTestoRecensione("");
    handleClose();
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <>
      <Button
        style={{ width: "150px" }}
        className="myButton rounded-4"
        onClick={handleShow}
      >
        Crea una recensione
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea una recensione</Modal.Title>
        </Modal.Header>
        <h6>*Indicates required</h6>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">Valutazione*</Form.Label>
              <br />
              <StarRatings
                rating={valutazione}
                starRatedColor="blue"
                changeRating={handlevalutazioneChange}
                numberOfStars={10}
                starDimension="30px"
                starSpacing="1px"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">Testo recensione*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                autoFocus
                name="name"
                value={testoRecensione.toString()}
                onChange={handleTestoRecensioneChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="ModalButton " onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateRecensione;
