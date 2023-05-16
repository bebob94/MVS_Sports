import { useState, useEffect, ChangeEvent } from "react";
import { Button, Row, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { NewEvento } from "../../Redux/Interfaces";
import {
  ALL_EVENTI,
  CreaEvento,
  fetchEventi,
} from "../../Redux/ActionType/Evento";

const ModalCreaEvento = ({
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

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [numeroPartecipanti, setNumeroPartecipanti] = useState<number>(0);
  const [eventPayload, setEventPayload] = useState<NewEvento>({
    numeroPartecipanti: 0,
    orarioInizio: selectedDate,
  });

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleNumeroPartecipantiChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumeroPartecipanti(Number(e.target.value));
  };

  useEffect(() => {
    setEventPayload({
      numeroPartecipanti: numeroPartecipanti,
      orarioInizio: selectedDate,
    });
  }, [numeroPartecipanti, selectedDate]);

  const handleSubmit = async (obj: NewEvento) => {
    const payload: NewEvento = {
      ...obj,
      numeroPartecipanti: numeroPartecipanti,
    };

    let x = await CreaEvento(payload, AttivitaId, UserId);

    let data = await fetchEventi();
    dispatch({
      type: ALL_EVENTI,
      payload: data,
    });

    setNumeroPartecipanti(0);
    setSelectedDate(new Date());
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
            onClick={() => {
              handleSubmit(eventPayload);
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

export default ModalCreaEvento;
