import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function Prenotazioni() {
  return (
    <div className="MyContainer py-5">
      <Container className="secondSection py-5 mb-5">
        <h2>Cerca e prenota il tuo campo sportivo online!</h2>
        <p className="mt-5 mb-5">
          Con il nostro portale online, puoi cercare e prenotare campi sportivi
          per vari sport. Una volta trovato il campo che desideri, puoi
          prenotarlo online in modo sicuro e conveniente.
        </p>
        <p className=" mb-5">
          Siamo qui per semplificare la tua vita sportiva e offrirti
          un'esperienza facile, veloce e conveniente nella ricerca e
          prenotazione dei campi sportivi.
        </p>
      </Container>
      <Container className="prenotazioniColor py-5 mt-5">
        <Row>
          <Col xs={12} md={6} className="mt-5">
            <h2>Cerca il tuo campo preferito!</h2>
            <p className="mt-5">
              <strong>
                Stai cercando un centro sportivo nel Sarrabus per prenotare un
                campo da calcetto, pallavolo, tennis? Oppure preferisci giocare
                a padel/paddle, beach tennis o beach volley libero?
              </strong>
            </p>
          </Col>
          <Col xs={12} md={6} className="mt-5">
            <Form className="mt-5">
              <Row className="g-2">
                <Col xs={12} sm={7} md={12}>
                  <Form.Control
                    type="search"
                    placeholder="Cerca per nome o indirizzo"
                    className="me-2"
                    aria-label="Search"
                  />
                </Col>
                <Col xs={12} sm={5} md={12}>
                  <Form.Control as="select" defaultValue="" aria-label="Sport">
                    <option value="">Sport</option>
                    <option value="calcetto">Calcetto</option>
                    <option value="tennis_singolo">Tennis singolo</option>
                    <option value="tennis_doppio">Tennis doppio</option>
                    <option value="paddle">Paddle</option>
                    <option value="beach_tennis">Beach tennis</option>
                    <option value="beach_volley">Beach volley</option>
                    <option value="pallavolo">Pallavolo</option>
                  </Form.Control>
                </Col>
                <Col xs={12}>
                  <Button variant="primary" type="submit">
                    <FaSearch /> Cerca
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Prenotazioni;
