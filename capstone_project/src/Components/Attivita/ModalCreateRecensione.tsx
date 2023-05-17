/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, ChangeEvent } from "react";
import { Button, Row, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NewRecensione } from "../../Redux/Interfaces";
import { ALL_USERS, fetchUsers } from "../../Redux/ActionType/user";
import {
  ALL_RECENSIONI,
  CreaRecensione,
  fetchRecensioni,
} from "../../Redux/ActionType/Recensioni";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_ID,
  searchById,
} from "../../Redux/ActionType/AttivitaSportive";

const ModalCreateRecensione = ({
  show,
  handleClose,
  UserId,
  AttivitaId,
}: {
  show: boolean;
  handleClose: () => void;
  UserId: number;
  AttivitaId: number;
}) => {
  const dispatch = useDispatch();

  const [valutazione, setValutazione] = useState<number>(0);
  const [testoRecensione, setTestoRecensione] = useState<String>("");

  const handlevalutazioneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValutazione(Number(e.target.value));
  };

  const handleTestoRecensioneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTestoRecensione(e.target.value);
  };

  useEffect(() => {
    setValutazione(valutazione);
    setTestoRecensione(testoRecensione);
  }, [show]);

  const handleSubmit = async () => {
    const payload: NewRecensione = {
      valutazione: valutazione,
      testoRecensione: testoRecensione,
    };
    let newRecensione = await CreaRecensione(payload, UserId, AttivitaId);
    let data = await fetchRecensioni();
    let data2 = await searchById(AttivitaId);
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

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un evento</Modal.Title>
        </Modal.Header>
        <h6>*Indicates required</h6>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">Valutazione*</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder=""
                autoFocus
                name="Number"
                value={valutazione}
                onChange={handlevalutazioneChange}
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
          <Button
            className="Profile-Btn1"
            style={{ margin: "0", fontSize: "1.2em", fontWeight: "bolder" }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateRecensione;
