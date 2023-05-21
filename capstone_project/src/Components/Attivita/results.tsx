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
import logoMVS from "../../image/logoMVS.jpg";
import Pagination from "react-bootstrap/Pagination";

function Results() {
  const allAttivita = useSelector(
    (state: RootState) => state?.attivitaSportiva?.AllAttivitaSportive
  );
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handlePrenotaClick = async (id: Number) => {
    let data = await searchById(id);
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

  return (
    <div className="MyContainer pt-5">
      <Container className="MyAttivita">
        {allAttivita && allAttivita.length > 0 ? (
          <>
            <Row className="justify-content-between">
              <h1 className="mb-5">RISULTATI RICERCA</h1>
            </Row>
            <Row>
              {currentItems?.map((attivita, i) => (
                <Col key={i} xs={12} className="mb-3">
                  <Link
                    to={`/Attivita/${attivita?.id}`}
                    onClick={() => handlePrenotaClick(attivita?.id)}
                    style={{ textDecoration: "none" }}
                  >
                    <Card className="mt-3 rounded-4 transparent-card">
                      <Row>
                        <Col xs={3}>
                          <Card.Img
                            variant="left"
                            src={logoMVS}
                            style={{ width: "100%", height: "100%" }}
                            className="rounded-4"
                          />
                        </Col>
                        <Col xs={9}>
                          <Card.Body>
                            <Card.Title className="mt-3 mb-4">
                              <strong>{attivita?.nomeAttivita}</strong>
                            </Card.Title>
                            <Card.Text className="my-3">
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
                              {attivita?.tipoDiSport}
                            </Card.Text>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Link>
                </Col>
              ))}
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
