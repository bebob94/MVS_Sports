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
} from "../Redux/ActionType/AttivitaSportive";
import { RootState } from "../Redux/Store";
import Carosello from "./Carosello";
import { USER_BY_USERNAME, userByUsername } from "../Redux/ActionType/user";

function Home() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [sport, setSport] = useState("");
  const user = useSelector((state: RootState) => state?.user.user);
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
    (async () => {
      let data = await userByUsername(user.username, token);
      dispatch({
        type: USER_BY_USERNAME,
        payload: data,
      });
    })();
  }, []);

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <div className="MyContainer pt-5" style={{ height: "100vh" }}>
      <Row style={{ height: "100%", width: "100%" }}>
        <Col xs={12} md={3} className="homeCard pt-5 ps-3 ">
          <h5 style={{ marginBottom: "12rem", marginTop: "5rem" }}>
            <strong>
              Non trovi abbastanza compagni? <br />
              Non ti preoccupare, ci pensiamo noi!!
            </strong>
          </h5>
          <Col xs={12} md={11} style={{ marginBottom: "12rem" }}>
            <h6>
              <strong> Ricerca i campi in base allo sport!</strong>
            </h6>
            <InputGroup className="mb-5">
              <Form.Control
                as="select"
                defaultValue=""
                aria-label="Sport"
                style={{
                  height: "3rem",
                  backgroundColor: " rgb(4, 58, 20)",
                  color: " #9bd339",
                  borderColor: "black",
                }}
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
                style={{
                  color: " rgb(4, 58, 20)",
                  backgroundColor: "#9bd339",
                  borderColor: "black",
                  zIndex: "1",
                }}
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

          <Col xs={12} md={11} className="my-5 ">
            <h6>
              <strong>Ricerca i campi per parola chiave!</strong>
            </h6>
            <input
              style={{
                width: "100%",
                backgroundColor: " rgb(4, 58, 20)",
                color: " #9bd339",
                borderColor: "black",
              }}
              type="text"
              value={search}
              placeholder="inserisci testo e premi invio"
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
        </Col>
        <Col xs={12} md={4}>
          <h5
            className=" text-center"
            style={{
              color: " #9bd339",
              backgroundColor: "black",
              borderBottomLeftRadius: "5rem",
              borderBottomRightRadius: "5rem",
              paddingTop: "0.8rem",
              paddingBottom: "0.2rem",
              marginLeft: "5em",
            }}
          >
            {" "}
            <strong>Prenota il tuo campo da gioco</strong>{" "}
          </h5>
        </Col>
        <Col
          xs={12}
          md={4}
          className="carosello-col"
          style={{ marginTop: "10em" }}
        >
          <Carosello />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
