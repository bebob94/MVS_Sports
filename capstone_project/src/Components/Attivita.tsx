import { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

function Attivita() {
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

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
    "08:00",
    "08:30",
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
          <Col xs={8} md={8}>
            <h2>Nome attività</h2>
            <h4 className="mt-5">Descrizione attività</h4>
            <p className="mt-4">
              aaaaaaaaaaaaaaaaaaaaaaaaa <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br />
              aaaaaaaaaaaaaaaaaaaaaaaaa <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br />
              aaaaaaaaaaaaaaaaaaaaaaaaa <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br />
            </p>
          </Col>
          <Col xs={6} md={4}>
            <h2>Recensioni attività</h2>
            <p className="mt-4">
              aaaaaaaaaaaaaaaaaaaaaaaaa <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br />
              aaaaaaaaaaaaaaaaaaaaaaaaa <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br />
              aaaaaaaaaaaaaaaaaaaaaaaaa <br />
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br />
            </p>
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
        </Row>
      </Container>
    </div>
  );
}

export default Attivita;
