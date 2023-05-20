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
  const itemsPerPage = 6;

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
              <h2>Aziende disponibili...</h2>
            </Row>
            <Row>
              {currentItems?.map((attivita, i) => (
                <Col key={i} sm={12} md={6} lg={4}>
                  <Link
                    to={`/Attivita/${attivita?.id}`}
                    onClick={() => handlePrenotaClick(attivita?.id)}
                    className="MyLink"
                  >
                    <Card className="my-3 pb-3 rounded-4 myCards">
                      <Card.Img
                        variant="top"
                        src={logoMVS}
                        style={{ width: "100%", height: "13em" }}
                      />
                      <Card.Body>
                        <Card.Title className="mb-4">
                          <strong>{attivita?.nomeAttivita}</strong>
                        </Card.Title>
                        <Card.Text className="my-3">
                          <strong>Descrizione:</strong>
                          <br />
                          {attivita?.descrizioneAttivita}
                        </Card.Text>
                        <Card.Text>
                          <strong>Sport: </strong>
                          {attivita?.tipoDiSport}
                        </Card.Text>
                        <div className="card-footer mt-auto"></div>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
            <Row className="justify-content-center">
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
