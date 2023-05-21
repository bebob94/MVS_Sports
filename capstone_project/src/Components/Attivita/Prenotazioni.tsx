import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_NAME,
  ATTIVITA_SPORTIVA_FETCH_BY_TIPO_DI_SPORT,
  searchByName,
  searchByTipoDiSport,
} from "../../Redux/ActionType/AttivitaSportive";
import banner from "../../image/pubbli.jpg";

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
          <Col xs={12} md={6} className="mb-5 mt-2">
            <h1 className="mb-3">
              <strong>I NOSTRI CENTRI SPORTIVI</strong>
            </h1>{" "}
            <br />
            <h4 className="mt-5">
              <strong>
                Stai cercando un centro sportivo nel Sarrabus per prenotare un
                campo da calcetto, pallavolo, tennis? Oppure preferisci giocare
                a padel/paddle, beach tennis o beach volley?
              </strong>
            </h4>
            <InputGroup>
              <Form.Control
                as="select"
                defaultValue=""
                aria-label="Sport"
                name="sport"
                onChange={(e) => setSport(e.target.value)}
              >
                <option value="">Seleziona uno sport</option>
                <option value="CALCETTO">Calcetto</option>
                <option value="TENNIS_SINGOLO">Tennis singolo</option>
                <option value="TENNIS_DOPPIO">Tennis doppio</option>
                <option value="PADDLE">Paddle</option>
                <option value="BEACH_TENNIS">Beach tennis</option>
                <option value="BEACH_VOLLEY">Beach volley</option>
                <option value="PALLAVOLO">Pallavolo</option>
              </Form.Control>
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
            </InputGroup>
          </Col>

          <Col xs={5} className="text-center mt-5  ">
            <img
              src={banner}
              alt="Banner pubblicitario"
              className="rounded-4 mt-5"
              style={{ height: "25em", marginLeft: "10em" }}
            />
          </Col>

          <Col xs={12} md={5} className="mt-3">
            <h2 className="mb-2">
              <strong>Cerca il tuo campo preferito!</strong>
            </h2>
            <input
              style={{ width: "20em" }}
              type="text"
              value={search}
              placeholder="Cerca per nome, indirizzo o parola chiave"
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
        </Row>
        <Row className="mt-5"></Row>
      </Container>
    </div>
  );
}

export default Prenotazioni;
