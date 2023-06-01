import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import Error from "../Error/Error";
import { Link } from "react-router-dom";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_ID,
  searchById,
} from "../../Redux/ActionType/AttivitaSportive";
import Pagination from "react-bootstrap/Pagination";

function Results() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const allAttivita = useSelector(
    (state: RootState) => state?.attivitaSportiva?.AllAttivitaSportive
  );
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // Spedizione dati
  const handlePrenotaClick = async (id: Number) => {
    let data = await searchById(id, token);
    dispatch({
      type: ATTIVITA_SPORTIVA_FETCH_BY_ID,
      payload: data,
    });
  };
  // Calcola l'indice dell'ultimo elemento della pagina corrente
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calcola l'indice del primo elemento della pagina corrente
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Ottieni gli elementi da mostrare sulla pagina corrente
  const currentItems = allAttivita?.slice(indexOfFirstItem, indexOfLastItem);
  // Calcola il numero totale di pagine
  const totalPages = Math.ceil(allAttivita?.length / itemsPerPage);
  // Cambia pagina
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const convertSportType = (sportType: any) => {
    switch (sportType) {
      case "CALCETTO":
        return "Calcetto";
      case "TENNIS_SINGOLO":
        return "Tennis Singolo";
      case "TENNIS_DOPPIO":
        return "Tennis Doppio";
      case "BEACH_TENNIS":
        return "Beach Tennis";
      case "BEACH_VOLLEY":
        return "Beach Volley";
      case "PALLAVOLO":
        return "Pallavolo";
      case "PADDLE":
        return "Paddle";
      default:
        return sportType;
    }
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <div className="MyContainer pt-5">
      <Row className="justify-content-center" style={{ width: "100%" }}>
        <Col xs={3}>
          <h5
            className=" text-center"
            style={{
              color: " #9bd339",
              backgroundColor: "black",
              borderBottomLeftRadius: "5rem",
              borderBottomRightRadius: "5rem",
              paddingTop: "0.8rem",
            }}
          >
            {" "}
            <strong>Risultati ricerca</strong>{" "}
          </h5>
        </Col>
      </Row>
      <Container className="MyAttivita">
        {allAttivita && allAttivita.length > 0 ? (
          <>
            <Row
              style={{
                borderBottom: "4px solid  #9bd339",
                paddingBottom: "30px",
              }}
              className=""
            >
              {currentItems?.map((attivita, i) => (
                <Col key={i} xs={12} className="mb-3">
                  <Link
                    to={`/Attivita/${attivita?.id}`}
                    onClick={() => handlePrenotaClick(attivita?.id)}
                    style={{ textDecoration: "none" }}
                  >
                    <Card className="mt-3 rounded-4 transparent-card">
                      <Row>
                        <Col xs={12} md={3}>
                          <Card.Img
                            variant="left"
                            src={attivita?.image}
                            style={{ width: "100%", height: "100%" }}
                            className="rounded-4"
                          />
                        </Col>
                        <Col xs={12} md={9}>
                          <Card.Body>
                            <Card.Title className="mt-3 mb-4">
                              <strong>{attivita?.nomeAttivita}</strong>
                            </Card.Title>
                            <Card.Text className="my-3 me-5 pe-5">
                              <strong>Descrizione:</strong>
                              <br />
                              {attivita?.descrizioneAttivita}
                            </Card.Text>
                            <Card.Text>
                              <strong>Indirizzo: </strong> <br />
                              {attivita?.indirizzo}
                            </Card.Text>
                            <Card.Text>
                              <strong>Sport: </strong> <br />
                              {convertSportType(attivita?.tipoDiSport)}
                            </Card.Text>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
            <Row className="justify-content-center mt-5">
              <Col xs={12} className="text-center">
                <Link to="/" className="MyLink" style={{ color: " #9bd339" }}>
                  <strong> Torna alla Home</strong>
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <Pagination>
                <Pagination.First onClick={() => handlePageChange(1)} />
                <Pagination.Prev
                  onClick={() =>
                    handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                  }
                />
                {[...Array(totalPages)].map((_, i) => (
                  <Pagination.Item
                    key={i}
                    active={i + 1 === currentPage}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() =>
                    handlePageChange(
                      currentPage < totalPages ? currentPage + 1 : totalPages
                    )
                  }
                />
                <Pagination.Last onClick={() => handlePageChange(totalPages)} />
              </Pagination>
            </Row>
          </>
        ) : (
          <Error />
        )}
      </Container>
    </div>
  );
}

export default Results;
