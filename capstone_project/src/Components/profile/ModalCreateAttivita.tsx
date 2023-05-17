/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, ChangeEvent } from "react";
import { Button, Row, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NewAttivita, NewRecensione } from "../../Redux/Interfaces";
import { ALL_USERS, USER_BY_ID, userById } from "../../Redux/ActionType/user";
import { CreaAttivita } from "../../Redux/ActionType/AttivitaSportive";

const ModalCreateAttivita = ({
  show,
  handleClose,
  UserId,
}: {
  show: boolean;
  handleClose: () => void;
  UserId: number;
}) => {
  const dispatch = useDispatch();

  const [AttivitaPayload, setAttivitaPayload] = useState<NewAttivita>({
    nomeAttivita: "",
    descrizioneAttivita: "",
    indirizzo: "",
    orarioApertura: "",
    orarioChiusura: "",
    tipoDiSport: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttivitaPayload({
      ...AttivitaPayload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (obj: NewAttivita) => {
    let x = await CreaAttivita(obj, UserId);

    let data = await userById(UserId);
    console.log(data);

    dispatch({
      type: USER_BY_ID,
      payload: data,
    });
    dispatch({
      type: ALL_USERS,
      payload: data,
    });
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
              <Form.Label className="mt-3">Name*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                autoFocus
                name="name"
                value={AttivitaPayload.nomeAttivita.toString()}
                onChange={handleChange}
              />
              <Form.Label className="mt-3">Descrizione attivita*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                name="surname"
                value={AttivitaPayload.descrizioneAttivita.toString()}
                onChange={handleChange}
              />
              <Form.Label className="mt-3">Indirizzo*</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder=""
                name="indirizzo"
                value={AttivitaPayload.indirizzo.toString()}
                onChange={handleChange}
              />
              <Form.Label className="mt-3">Orario inizio*</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder=""
                name="orarioApertura"
                value={AttivitaPayload.orarioApertura.toString()}
                onChange={handleChange}
              />
              <Form.Label className="mt-3">Indirizzo*</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder=""
                name="indirizzo"
                value={AttivitaPayload.orarioChiusura.toString()}
                onChange={handleChange}
              />
              <Form.Control
                as="select"
                defaultValue=""
                aria-label="Sport"
                name="sport"
                onChange={handleChange}
              >
                <option value="">Sport</option>
                <option value="CALCETTO">Calcetto</option>
                <option value="TENNIS_SINGOLO">Tennis singolo</option>
                <option value="TENNIS_DOPPIO">Tennis doppio</option>
                <option value="PADDLE">Paddle</option>
                <option value="BEACH_TENNIS">Beach tennis</option>
                <option value="BEACH_VOLLEY">Beach volley</option>
                <option value="PALLAVOLO">Pallavolo</option>
              </Form.Control>
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

export default ModalCreateAttivita;
