import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_NAME,
  ATTIVITA_SPORTIVA_FETCH_BY_TIPO_DI_SPORT,
  searchByName,
  searchByTipoDiSport,
} from "../../Redux/ActionType/AttivitaSportive";

function Prenotazioni() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [sport, setSport] = useState("");

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
  const handleSubmit2 = async (e: any) => {
    e.preventDefault();
    let data = await searchByTipoDiSport(sport);

    dispatch({
      type: ATTIVITA_SPORTIVA_FETCH_BY_TIPO_DI_SPORT,
      payload: data,
    });
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
          <Row className="mt-5">
            <Col xs={12} sm={5} md={5}>
              <Form.Control
                as="select"
                defaultValue=" "
                aria-label="Sport"
                name="sport"
                onChange={(e) => setSport(e.target.value)}
              >
                <option value="CALCETTO">Calcetto</option>
                <option value="TENNIS_SINGOLO">Tennis singolo</option>
                <option value="TENNIS_DOPPIO">Tennis doppio</option>
                <option value="PADDLE">Paddle</option>
                <option value="BEACH_TENNIS">Beach tennis</option>
                <option value="BEACH_VOLLEY">Beach volley</option>
                <option value="PALLAVOLO">Pallavolo</option>
              </Form.Control>
            </Col>
            <Col xs={5}>
              <Button
                variant="primary"
                type="submit"
                className="mt-0"
                onClick={(e) => {
                  handleSubmit2(e);
                }}
              >
                <FaSearch />
              </Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Prenotazioni;
