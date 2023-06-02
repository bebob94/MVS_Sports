import React, { useState, ChangeEvent } from "react";
import { Button, Row, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { NewEvento } from "../../Redux/Interfaces";
import {
  ALL_EVENTI,
  CreaEvento,
  fetchEventi,
} from "../../Redux/ActionType/Evento";
import { ALL_NOTIFICHE, fetchNotifiche } from "../../Redux/ActionType/Notifica";
import {
  ALL_USERS,
  USER_BY_ID,
  fetchUsers,
  userById,
} from "../../Redux/ActionType/user";
import { RootState } from "../../Redux/Store";
import { it } from "date-fns/locale";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_ID,
  searchById,
} from "../../Redux/ActionType/AttivitaSportive";

const ModalCreaEvento = ({
  UserId,
  AttivitaId,
}: {
  UserId: number;
  AttivitaId: number;
}) => {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const dispatch = useDispatch();
  const attivita = useSelector(
    (state: RootState) => state?.attivitaSportiva.AttivitaSportiva
  );
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [numeroPartecipanti, setNumeroPartecipanti] = useState<number>(0);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isDateValid, setIsDateValid] = useState(true);
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Controllo dat e orario eventi
  const handleDateChange = (date: Date) => {
    let isValid = true;
    attivita?.eventi?.forEach((evento) => {
      const eventoDataInizio = new Date(evento.orarioInizio);
      const eventoDataFine = new Date(evento.orarioFine);
      if (date >= eventoDataInizio && date < eventoDataFine) {
        isValid = false;
      }
    });
    setIsDateValid(isValid);
    setSelectedDate(date);
  };

  // Modifica numero partecipanti
  const handleNumeroPartecipantiChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumeroPartecipanti(Number(e.target.value));
  };

  // Spedizione dati
  const handleSubmit = async () => {
    const payload: NewEvento = {
      numeroPartecipanti: numeroPartecipanti,
      orarioInizio: selectedDate,
    };
    let newEvent = await CreaEvento(payload, UserId, AttivitaId, token);
    let data = await fetchEventi(token);
    let data2 = await fetchNotifiche(token);
    let data3 = await fetchUsers(token);
    let data4 = await searchById(AttivitaId, token);
    let data5 = await userById(UserId, token);
    dispatch({
      type: ALL_EVENTI,
      payload: data,
    });
    dispatch({
      type: ALL_NOTIFICHE,
      payload: data2,
    });
    dispatch({
      type: ALL_USERS,
      payload: data3,
    });
    dispatch({
      type: USER_BY_ID,
      payload: data5,
    });
    dispatch({
      type: ATTIVITA_SPORTIVA_FETCH_BY_ID,
      payload: data4,
    });
    setNumeroPartecipanti(0);
    setSelectedDate(new Date());
    handleClose();
  };

  // Controllo data odierna
  const currentDate = new Date();
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <>
      <Button
        style={{ width: "180px" }}
        className="myButton rounded-4"
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
                    timeIntervals={60}
                    timeCaption="Time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="form-control dataForm"
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
                    required
                    type="number"
                    placeholder=""
                    autoFocus
                    value={numeroPartecipanti.toString()}
                    onChange={handleNumeroPartecipantiChange}
                  />
                </Form.Group>
              </div>
            </Row>
          </Form>
          {!isDateValid && (
            <p style={{ color: "red" }}>
              Prenotazione già presente in questa data.
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="ModalButton"
            onClick={handleSubmit}
            disabled={
              selectedDate < currentDate ||
              numeroPartecipanti > attivita.numeroMassimoPartecipanti ||
              showAlert ||
              !isDateValid
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
