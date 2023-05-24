import React, { useState, useEffect, ChangeEvent } from "react";
import { Button, Row, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { parseISO, isSameSecond } from "date-fns";
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
import { RootState } from "../../Redux/Store";
import { it } from "date-fns/locale";

const ModalCreaEvento = ({
  UserId,
  AttivitaId,
}: {
  UserId: number;
  AttivitaId: number;
}) => {
  const dispatch = useDispatch();
  const attivita = useSelector(
    (state: RootState) => state?.attivitaSportiva.AttivitaSportiva
  );
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [numeroPartecipanti, setNumeroPartecipanti] = useState<number>(0);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  const handleDateChange = (date: Date) => {
    attivita?.eventi?.forEach((evento) => {
      if (isSameSecond(new Date(evento.orarioInizio), date)) {
        setShowAlert(true);
      } else {
        setShowAlert(false);
      }
    });
    console.log(showAlert);

    setSelectedDate(date);
  };

  const handleNumeroPartecipantiChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumeroPartecipanti(Number(e.target.value));
  };

  const handleSubmit = async () => {
    const payload: NewEvento = {
      numeroPartecipanti: numeroPartecipanti,
      orarioInizio: selectedDate,
    };

    let newEvent = await CreaEvento(payload, UserId, AttivitaId, token);

    let data = await fetchEventi(token);
    let data2 = await fetchNotifiche(token);
    let data3 = await fetchUsers(token);

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
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Prenota un campo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <div>
                <Form.Group className="mb-3">
                  <Form.Label>Data e ora inizio</Form.Label>
                  <br />
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="form-control"
                    minDate={currentDate}
                    locale={it} // Aggiungi questa riga per utilizzare il locale italiano
                  />
                </Form.Group>
              </div>
            </Row>
            <Row>
              <div>
                <Form.Group className="mb-3">
                  <Form.Label>Numero partecipanti</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    max={attivita.numeroMassimoPartecipanti}
                    placeholder="Inserisci il numero di partecipanti"
                    value={numeroPartecipanti}
                    onChange={handleNumeroPartecipantiChange}
                  />
                </Form.Group>
              </div>
            </Row>
          </Form>
          {showAlert && (
            <div className="alert alert-danger mt-3" role="alert">
              Prenotazione già esistente in questa data.
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="Profile-Btn1"
            style={{ margin: "0", fontSize: "1.2em", fontWeight: "bolder" }}
            onClick={handleSubmit}
            disabled={
              selectedDate < currentDate ||
              numeroPartecipanti > attivita.numeroMassimoPartecipanti ||
              showAlert
            }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreaEvento;
