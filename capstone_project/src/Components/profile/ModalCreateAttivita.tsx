import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NewAttivita } from "../../Redux/Interfaces";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_ID,
  CreaAttivita,
  searchById,
} from "../../Redux/ActionType/AttivitaSportive";
import { ALL_USERS, USER_BY_ID, userById } from "../../Redux/ActionType/user";
import { AttivitaSportiva } from "../../Redux/Interfaces";
import { RootState } from "../../Redux/Store";

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
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  const [nomeAttivita, setNomeAttivita] = useState("");
  const [descrizioneAttivita, setDescrizioneAttivita] = useState("");
  const [indirizzo, setIndirizzo] = useState("");
  const [orarioApertura, setOrarioApertura] = useState("");
  const [orarioChiusura, setOrarioChiusura] = useState("");
  const [tipoDiSport, setTipoDiSport] = useState("");

  const handleSubmit = async () => {
    const AttivitaPayload: NewAttivita = {
      nomeAttivita,
      descrizioneAttivita,
      indirizzo,
      orarioApertura,
      orarioChiusura,
      tipoDiSport,
    };

    try {
      const response = await CreaAttivita(AttivitaPayload, UserId, token);
    } catch (error) {
      console.log(error);
    }

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
              <Form.Label className="mt-3">Name*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                autoFocus
                value={nomeAttivita}
                onChange={(e) => setNomeAttivita(e.target.value)}
              />
              <Form.Label className="mt-3">Descrizione attivita*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                value={descrizioneAttivita}
                onChange={(e) => setDescrizioneAttivita(e.target.value)}
              />
              <Form.Label className="mt-3">Indirizzo*</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder=""
                value={indirizzo}
                onChange={(e) => setIndirizzo(e.target.value)}
              />
              <Form.Label className="mt-3">Orario apertura*</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder=""
                value={orarioApertura}
                onChange={(e) => setOrarioApertura(e.target.value)}
              />
              <Form.Label className="mt-3">Orario chiusura*</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder=""
                value={orarioChiusura}
                onChange={(e) => setOrarioChiusura(e.target.value)}
              />
              <Form.Label className="mt-3">Tipo di sport*</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder=""
                value={tipoDiSport}
                onChange={(e) => setTipoDiSport(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="ModalButton " onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="ModalButton " onClick={handleSubmit}>
            Crea
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateAttivita;
