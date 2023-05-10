import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function Prenotazioni() {
  return (
    <div className="MyContainer ">
      <Form>
        <Container className=" prenotazioniColor">
          <Row style={{ margin: "10em 0 0 2em" }}>
            <Col sm={3}>
              <Form.Label>Ricerca Attività</Form.Label>
              <Form.Control
                type="search"
                placeholder="cerca per nome o indirizzo"
                className="me-2"
                aria-label="Search"
              />
            </Col>
            <Col sm={2}>
              <Form.Group controlId="formSport">
                <Form.Label>Sport</Form.Label>
                <Form.Control as="select">
                  <option value="">Seleziona uno sport</option>
                  <option value="calcetto">Calcetto</option>
                  <option value="tennis_singolo">Tennis singolo</option>
                  <option value="tennis_doppio">Tennis doppio</option>
                  <option value="paddle">Paddle</option>
                  <option value="beach_tennis">Beach tennis</option>
                  <option value="beach_volley">Beach volley</option>
                  <option value="pallavolo">Pallavolo</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group controlId="formData">
                <Form.Label>Data</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col sm={2}>
              <Form.Group controlId="formOrario">
                <Form.Label>Orario</Form.Label>
                <Form.Control as="select">
                  <option value="">Seleziona un orario</option>
                  <option value="08:00">08:00</option>
                  <option value="08:30">08:30</option>
                  <option value="09:00">09:00</option>
                  <option value="09:30">09:30</option>
                  <option value="10:00">10:00</option>
                  <option value="10:30">10:30</option>
                  <option value="11:00">11:00</option>
                  <option value="11:30">11:30</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="14:30">14:30</option>
                  <option value="15:00">15:00</option>
                  <option value="15:30">15:30</option>
                  <option value="16:00">16:00</option>
                  <option value="16:30">16:30</option>
                  <option value="17:00">17:00</option>
                  <option value="17:30">17:30</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                  <option value="20:00">20:00</option>
                  <option value="20:30">20:30</option>
                  <option value="21:00">21:00</option>
                  <option value="21:30">21:30</option>
                  <option value="22:00">22:00</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col sm={2} className="mt-4">
              <Button variant="primary" type="submit">
                <FaSearch /> Cerca
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
      <Container className=" secondSection">
        <h3>
          Stai cercando un centro sportivo nel Sarrabus per prenotare un campo
          da calcetto, pallavolo, tennis? Oppure preferisci trovare un campo da
          padel/paddle, beach tennis o beach volley libero? <hr />
          Con il nostro portale online, puoi cercare e prenotare campi sportivi
          per vari sport.
          <hr />
          Una volta trovato il campo che desideri, puoi prenotarlo online in
          modo sicuro e conveniente.
          <hr />
          Siamo qui per semplificare la tua vita sportiva e offrirti
          un'esperienza facile, veloce e conveniente nella ricerca e
          prenotazione dei campi sportivi.
        </h3>
      </Container>
    </div>
  );
}

export default Prenotazioni;
