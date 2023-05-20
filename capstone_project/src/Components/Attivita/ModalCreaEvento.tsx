import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, Row, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { NewEvento } from "../../Redux/Interfaces";
import {
  ALL_EVENTI,
  CreaEvento,
  fetchEventi,
} from "../../Redux/ActionType/Evento";
import {
  ALL_NOTIFICHE,
  CREA_NOTIFICA,
  fetchNotifiche,
} from "../../Redux/ActionType/Notifica";
import { ALL_USERS, fetchUsers } from "../../Redux/ActionType/user";

const ModalCreaEvento = ({
  UserId,
  AttivitaId,
}: {
  UserId: number;
  AttivitaId: number;
}) => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [numeroPartecipanti, setNumeroPartecipanti] = useState<number>(0);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleNumeroPartecipantiChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumeroPartecipanti(Number(e.target.value));
  };

  useEffect(() => {
    setNumeroPartecipanti(numeroPartecipanti);
    setSelectedDate(selectedDate);
  }, [show]);

  const handleSubmit = async () => {
    const formattedDate = format(selectedDate, "yyyy-MM-dd'T'HH:mm:ss");
    const orarioInizio = new Date(formattedDate);

    const payload: NewEvento = {
      numeroPartecipanti: numeroPartecipanti,
      orarioInizio: orarioInizio,
    };

    let newEvent = await CreaEvento(payload, UserId, AttivitaId);

    let data = await fetchEventi();
    let data2 = await fetchNotifiche();
    let data3 = await fetchUsers();

    dispatch({
      type: ALL_EVENTI,
      payload: data,
    });
    dispatch({
      type: CREA_NOTIFICA,
    });
    dispatch({
      type: ALL_NOTIFICHE,
      payload: data2,
    });
    dispatch({
      type: ALL_USERS,
      payload: data3,
    });

    setNumeroPartecipanti(0);
    setSelectedDate(new Date());

    handleClose();
  };

  const currentDate = new Date();

  return (
    <>
      <Button
        style={{ width: "150px" }}
        className=" rounded-4"
        onClick={handleShow}
      >
        Prenota un campo
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un evento</Modal.Title>
        </Modal.Header>
        <h6>*Indicates required</h6>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">Numero Partecipanti*</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder=""
                autoFocus
                name="Number"
                value={numeroPartecipanti}
                onChange={handleNumeroPartecipantiChange}
              />
            </Form.Group>
            <Row className="justify-content-around ms-1">
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
              />
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="Profile-Btn1"
            style={{ margin: "0", fontSize: "1.2em", fontWeight: "bolder" }}
            onClick={handleSubmit}
            disabled={selectedDate < currentDate}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreaEvento;
