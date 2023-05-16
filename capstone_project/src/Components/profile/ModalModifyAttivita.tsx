import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { AttivitaChange, AttivitaSportiva } from "../../Redux/Interfaces";
import { GiPencil } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_ID,
  changeMyInfoAttivita,
  searchById,
} from "../../Redux/ActionType/AttivitaSportive";
import { USER_BY_ID, userById } from "../../Redux/ActionType/user";

const ModalModifyAttivita = ({
  AttivitaId,
}: {
  AttivitaId: AttivitaSportiva;
}) => {
  const selectedAttivita = useSelector(
    (state: RootState) => state?.attivitaSportiva?.AttivitaSportiva
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [AttivitaPayload, setAttivitaPayload] = useState<AttivitaChange>({
    id: AttivitaId?.id,
    nomeAttivita: AttivitaId?.nomeAttivita,
    descrizioneAttivita: AttivitaId?.descrizioneAttivita,
    indirizzo: AttivitaId?.indirizzo,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttivitaPayload({
      ...AttivitaPayload,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setAttivitaPayload({
      id: AttivitaId?.id,
      nomeAttivita: AttivitaId?.nomeAttivita,
      descrizioneAttivita: AttivitaId?.descrizioneAttivita,
      indirizzo: AttivitaId?.indirizzo,
    });
  }, [AttivitaId]);

  const handleSubmit = async (obj: AttivitaChange) => {
    let x = await changeMyInfoAttivita(obj);
    let data2 = await userById(selectedAttivita.user.id);
    let data = await searchById(selectedAttivita.id);
    dispatch({
      type: ATTIVITA_SPORTIVA_FETCH_BY_ID,
      payload: data,
    });
    dispatch({
      type: USER_BY_ID,
      payload: data2,
    });
  };

  return (
    <>
      <div className="d-flex">
        <Button id="modal-btn" className="d-flex" onClick={handleShow}>
          <GiPencil />
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Attivita</Modal.Title>
        </Modal.Header>
        <h6>*Indicates required</h6>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">nome Attivita*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                autoFocus
                name="nomeAttivita"
                value={AttivitaPayload?.nomeAttivita?.toString()}
                onChange={handleChange}
              />
              <Form.Label className="mt-3">Descrizione*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                name="descrizioneAttivita"
                value={AttivitaPayload?.descrizioneAttivita?.toString()}
                onChange={handleChange}
              />
              <Form.Label className="mt-3">Indirizzo*</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder=""
                name="indirizzo"
                value={AttivitaPayload?.indirizzo?.toString()}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="Profile-Btn1"
            style={{ margin: "0", fontSize: "1.2em", fontWeight: "bolder" }}
            onClick={() => {
              handleSubmit(AttivitaPayload);
              handleClose();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalModifyAttivita;
