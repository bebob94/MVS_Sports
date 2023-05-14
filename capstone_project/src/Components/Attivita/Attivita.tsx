import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  ATTIVITA_SPORTIVA_FETCH,
  fetchAttivita,
} from "../../Redux/ActionType/AttivitaSportive";

function Attivita() {
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const dispatch = useDispatch();
  const Attivita = useSelector(
    (state: RootState) => state.attivitaSportiva?.AttivitaSportiva
  );

  useEffect(() => {
    (async () => {
      let data = await fetchAttivita();
      dispatch({
        type: ATTIVITA_SPORTIVA_FETCH,
        payload: data,
      });
    })();
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setSelectedTime("");
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(e.target.value);
  };

  const isTimeSlotAvailable = (time: string) => {
    // here you should implement your logic to check if the time slot is available for the selected date
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // here you can implement your logic to handle the form submission
  };

  const timeOptions = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  return (
    <div className="MyContainer pt-5">
      <Container className=" MyAttivita">
        <Row>
          <Col xs={6} md={6}>
            <Col xs={8} md={8}>
              <h2>{Attivita.nomeAttivita}</h2>
              <h4 className="mt-5">Descrizione attività</h4>
              <h5 className="mt-4">{Attivita.descrizioneAttivita}</h5>
            </Col>
            <Col xs={6} md={6} className="mt-5">
              <h4>Prenota un campo</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formData">
                  <Form.Label>Data</Form.Label>
                  <Form.Control
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                  />
                </Form.Group>
                <Form.Group controlId="formOrario" className="mt-5">
                  <Form.Label>Orario</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedTime}
                    onChange={handleTimeChange as any}
                  >
                    <option value="">Seleziona un orario</option>
                    {timeOptions.map((time) => (
                      <option
                        key={time}
                        value={time}
                        disabled={!isTimeSlotAvailable(time)}
                      >
                        {time}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Button
                  className="mt-5"
                  variant="primary"
                  type="submit"
                  disabled={!selectedTime}
                >
                  Prenota
                </Button>
              </Form>
            </Col>
          </Col>
          <Col xs={6} md={6}>
            <h2>Recensioni attività</h2>
            {Attivita?.recensioni?.map((singRecensione, i) => (
              <div className="my-5" key={i}>
                <p className=" d-flex justify-content-around">
                  <p>
                    <strong className="me-4">Utente:</strong>{" "}
                    {singRecensione.user.name} {singRecensione.user.surname}{" "}
                  </p>
                  <p>
                    <strong className="me-4">Valutazione:</strong>{" "}
                    {singRecensione.valutazione.toString()}
                  </p>
                </p>
                <p className="mb-5">
                  <strong>{singRecensione.testoRecensione}</strong>
                </p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Attivita;
