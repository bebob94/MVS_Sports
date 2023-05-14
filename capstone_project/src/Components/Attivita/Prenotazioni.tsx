import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_NAME,
  searchByName,
} from "../../Redux/ActionType/AttivitaSportive";

function Prenotazioni() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate("/Results");
    console.log("enter");
  };

  useEffect(() => {
    if (search) {
      (async () => {
        let data = await searchByName(search);

        dispatch({
          type: ATTIVITA_SPORTIVA_FETCH_BY_NAME,
          payload: data,
        });
      })();
    }
  }, [search]);

  return (
    <div className="MyContainer py-5">
      <Container className="prenotazioniColor py-5 mt-5">
        <Row>
          <Col xs={12} md={6} className="mt-5">
            <h2>Cerca il tuo campo preferito!</h2>
            <h3 className="mt-5">
              <strong>
                Stai cercando un centro sportivo nel Sarrabus per prenotare un
                campo da calcetto, pallavolo, tennis? Oppure preferisci giocare
                a padel/paddle, beach tennis o beach volley?
              </strong>
            </h3>
          </Col>
          <Col xs={12} md={6} className="mt-5">
            <input
              type="text"
              value={search}
              placeholder="Cerca"
              onChange={(e) => {
                handleSearch(e);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.keyCode === 13) {
                  handleSubmit(e);
                }
              }}
            />
          </Col>
          <Row>
            <Col xs={12} sm={5} md={5} className="mt-5">
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
        </Row>
      </Container>
      <Container className="secondSection py-5 mb-5">
        <h2>Cerca e prenota il tuo campo sportivo online!</h2>
        <h4 className="mt-5 mb-5">
          Con il nostro portale online, puoi cercare e prenotare campi sportivi
          per vari sport. Una volta trovato il campo che desideri, puoi
          prenotarlo online in modo sicuro e conveniente.
        </h4>
        <h4 className=" mb-5">
          Siamo qui per semplificare la tua vita sportiva e offrirti
          un'esperienza facile, veloce e conveniente nella ricerca e
          prenotazione dei campi sportivi.
        </h4>
      </Container>
    </div>
  );
}

export default Prenotazioni;
