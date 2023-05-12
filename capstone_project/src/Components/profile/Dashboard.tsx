import { Button, Modal, Container, Row, Col } from "react-bootstrap";

type User = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

const user: User = {
  name: "Mario Rossi",
  email: "mario.rossi@example.com",
  phone: "1234567890",
  address: "Via Roma 1, 00100 Roma",
};

const events = [
  {
    id: 1,
    name: "Evento 1",
    start: "10:00",
    end: "12:00",
    participants: 8,
    createdBy: "Luigi Verdi",
    activity: "Calcio",
  },
  {
    id: 2,
    name: "Evento 2",
    start: "14:00",
    end: "16:00",
    participants: 12,
    createdBy: "Giovanni Bianchi",
    activity: "Basket",
  },
  {
    id: 3,
    name: "Evento 3",
    start: "18:00",
    end: "20:00",
    participants: 6,
    createdBy: "Maria Neri",
    activity: "Tennis",
  },
];

const Dashboard = () => {
  return (
    <div className="MyContainer pt-5">
      <Container className="mt-5 text-light">
        <Row>
          <Col md={8}>
            <h1 className="mb-5 ">Benvenuto {user.name}!</h1>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <strong>
              <h2>I miei dati</h2>
              <p>Nome: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Telefono: {user.phone}</p>
              <p>Indirizzo: {user.address}</p>
            </strong>
            <Button>Modifica dati utente</Button>
            <Modal>
              <Modal.Header>
                <Modal.Title>Modifica dati utente</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Qui ci sarebbe il form per modificare i dati utente</p>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className="mt-5 mb-5">Eventi prenotati</h2>
          </Col>
        </Row>
        <Row>
          {events.map((event) => (
            <Col key={event.id} md={4} className=" mb-5">
              <h3 className=" mb-3">{event.name}</h3>
              <strong>
                <p>Inizio: {event.start}</p>
                <p>Fine: {event.end}</p>
                <p>Partecipanti: {event.participants}</p>
                <p>Creato da: {event.createdBy}</p>
                <p>Attività: {event.activity}</p>
              </strong>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
