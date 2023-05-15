import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import Error from "../Error";
import { Link } from "react-router-dom";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_ID,
  searchById,
} from "../../Redux/ActionType/AttivitaSportive";

function Results() {
  const allAttivita = useSelector(
    (state: RootState) => state.attivitaSportiva.AllAttivitaSportive
  );
  const dispatch = useDispatch();

  const handlePrenotaClick = async (id: Number) => {
    let data = await searchById(id);
    dispatch({
      type: ATTIVITA_SPORTIVA_FETCH_BY_ID,
      payload: data,
    });
  };

  return (
    <div className="MyContainer pt-5">
      <Container className=" MyAttivita">
        {allAttivita && allAttivita.length > 0 ? (
          <Row className="justify-content-between">
            <h2>Aziende disponibili...</h2>
            {allAttivita.map((attivita, i) => (
              <Col key={i} sm={12} md={4} lg={4}>
                <Link
                  to={`/Attivita/${attivita.id}`}
                  onClick={() => handlePrenotaClick(attivita.id)}
                  className="MyLink"
                >
                  <Card className="my-3 p-3 rounded-4 myCards">
                    <Card.Body>
                      <Card.Title className="mb-4">
                        <strong>{attivita.nomeAttivita}</strong>
                      </Card.Title>
                      <Card.Text className="my-5">
                        <strong>Descrizione:</strong>
                        <br />
                        {attivita.descrizioneAttivita}
                      </Card.Text>
                      <Card.Text>
                        <strong>Sport: </strong>
                        {attivita.tipoDiSport}
                      </Card.Text>
                      <div className="card-footer mt-auto"></div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ) : (
          <Error />
        )}
      </Container>
    </div>
  );
}

export default Results;
