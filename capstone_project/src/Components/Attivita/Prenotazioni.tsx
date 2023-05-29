import { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_NAME,
  ATTIVITA_SPORTIVA_FETCH_BY_TIPO_DI_SPORT,
  ATTIVITA_SPORTIVA_FETCH,
  fetchAttivita,
  searchByName,
  searchByTipoDiSport,
} from "../../Redux/ActionType/AttivitaSportive";
import { RootState } from "../../Redux/Store";

function Prenotazioni() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [sport, setSport] = useState("");
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // ricerca
  const handleSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  // Prima spedizione dati
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let data = await searchByName(search, token);
    dispatch({
      type: ATTIVITA_SPORTIVA_FETCH_BY_NAME,
      payload: data,
    });
    navigate("/Results");
    console.log("enter");
  };

  // Seconda spedizione dati
  const handleSubmit2 = async (e: any) => {
    e.preventDefault();
    let data = await searchByTipoDiSport(sport, token);
    dispatch({
      type: ATTIVITA_SPORTIVA_FETCH_BY_TIPO_DI_SPORT,
      payload: data,
    });
    navigate("/Results");
    console.log("enter");
  };

  // Aggiornamento pagina
  useEffect(() => {
    (async () => {
      let data = await fetchAttivita(token);
      dispatch({
        type: ATTIVITA_SPORTIVA_FETCH,
        payload: data,
      });
    })();
  }, []);
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
            <InputGroup className="mb-5">
              <Form.Control
                as="select"
                defaultValue=""
                aria-label="Sport"
                name="sport"
                onChange={(e) => setSport(e.target.value)}
              >
                <option
                  style={{
                    overflow: "hidden",
                    overflowWrap: "break-word",
                    width: "100%",
                    display: "inline-block",
                    whiteSpace: "pre-line",
                  }}
                  value=""
                >
                  Seleziona uno sport
                </option>
                <option
                  style={{
                    overflow: "hidden",
                    overflowWrap: "break-word",
                    width: "100%",
                    display: "inline-block",
                    whiteSpace: "pre-line",
                  }}
                  value="CALCETTO"
                >
                  Calcetto
                </option>
                <option
                  style={{
                    overflow: "hidden",
                    overflowWrap: "break-word",
                    width: "100%",
                    display: "inline-block",
                    whiteSpace: "pre-line",
                  }}
                  value="TENNIS_SINGOLO"
                >
                  Tennis singolo
                </option>
                <option
                  style={{
                    overflow: "hidden",
                    overflowWrap: "break-word",
                    width: "100%",
                    display: "inline-block",
                    whiteSpace: "pre-line",
                  }}
                  value="TENNIS_DOPPIO"
                >
                  Tennis doppio
                </option>
                <option
                  style={{
                    overflow: "hidden",
                    overflowWrap: "break-word",
                    width: "100%",
                    display: "inline-block",
                    whiteSpace: "pre-line",
                  }}
                  value="PADDLE"
                >
                  Paddle
                </option>
                <option
                  style={{
                    overflow: "hidden",
                    overflowWrap: "break-word",
                    width: "100%",
                    display: "inline-block",
                    whiteSpace: "pre-line",
                  }}
                  value="BEACH_TENNIS"
                >
                  Beach tennis
                </option>
                <option
                  style={{
                    overflow: "hidden",
                    overflowWrap: "break-word",
                    width: "100%",
                    display: "inline-block",
                    whiteSpace: "pre-line",
                  }}
                  value="BEACH_VOLLEY"
                >
                  Beach volley
                </option>
                <option
                  style={{
                    overflow: "hidden",
                    overflowWrap: "break-word",
                    width: "100%",
                    display: "inline-block",
                    whiteSpace: "pre-line",
                  }}
                  value="PALLAVOLO"
                >
                  Pallavolo
                </option>
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

          <Col xs={12} md={7} className="mt-5">
            <h2 className="mb-2 mt-5">
              <strong>Cerca il tuo campo preferito!</strong>
            </h2>
            <input
              style={{ width: "18em" }}
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
