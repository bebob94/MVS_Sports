import React, { useEffect, useState } from "react";
import { Row, Col, Container, Pagination, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  ATTIVITA_SPORTIVA_FETCH,
  fetchAttivita,
  searchById,
} from "../../Redux/ActionType/AttivitaSportive";
import ModalCreaEvento from "./ModalCreaEvento";
import "react-datepicker/dist/react-datepicker.css";
import ModalCreateRecensione from "./ModalCreateRecensione";
import { deleteRecensione } from "../../Redux/ActionType/Recensioni";
import { ATTIVITA_SPORTIVA_FETCH_BY_ID } from "../../Redux/ActionType/AttivitaSportive";

function Attivita() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 2; // Numero di recensioni per pagina
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  const userLoged = useSelector((state: RootState) => state?.user.user);
  const Attivita = useSelector(
    (state: RootState) => state.attivitaSportiva?.AttivitaSportiva
  );
  const User = useSelector((state: RootState) => state?.User.user);

  useEffect(() => {
    (async () => {
      let data = await fetchAttivita(token);
      console.log(User?.id);

      dispatch({
        type: ATTIVITA_SPORTIVA_FETCH,
        payload: data,
      });
    })();
  }, [Attivita]);

  const formatTime = (time: string) => {
    return time.substring(0, 5); // Estrae i primi 5 caratteri della stringa
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Sicuro di voler eliminare l'evento?");
    if (confirmDelete) {
      let x = await deleteRecensione(id, token);
      let data = await searchById(Attivita.id, token);

      dispatch({
        type: ATTIVITA_SPORTIVA_FETCH_BY_ID,
        payload: data,
      });
    }
  };

  // Calcola l'indice di inizio e fine delle recensioni da visualizzare
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = Attivita?.recensioni?.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  const totalReviews = Attivita?.recensioni?.length;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  return (
    <div className="MyContainer py-5">
      <Container className="MyAttivita mt-5">
        <Row
          className="py-5 px-5 rounded-4"
          style={{ backgroundColor: "rgba(92, 88, 88, 0.822)" }}
        >
          <Col xs={12} md={6}>
            <Col xs={12} md={8}>
              <h1 className="mb-4">{Attivita?.nomeAttivita}</h1>
              <h4 className="mt-5">Descrizione attività:</h4>
              <p>{Attivita?.descrizioneAttivita}</p>
              <h4 className="mt-4">Sport:</h4>
              <p>{Attivita?.tipoDiSport}</p>
              <h4 className="mt-4">Orario Apertura:</h4>
              <p>{formatTime(Attivita?.orarioApertura.toString())}</p>
              <h4 className="mt-4">Orario chiusura</h4>
              <p>{formatTime(Attivita?.orarioChiusura.toString())}</p>
              <h4 className="mt-4">
                Numero massimo partecipanti:{" "}
                {Attivita?.numeroMassimoPartecipanti}
              </h4>
            </Col>
            <Col xs={6} md={6} className="mt-5">
              <h4>Prenota un campo</h4>

              <Col xs={1} className="mt-3">
                <ModalCreaEvento UserId={User?.id} AttivitaId={Attivita?.id} />
              </Col>
            </Col>
          </Col>
          <Col xs={12} md={6}>
            <h2 className="my-5">Recensioni attività</h2>
            {currentReviews?.map((singRecensione, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "2px solid white",
                }}
              >
                <h5>
                  <strong>Utente:</strong>
                  {singRecensione?.user?.username === userLoged?.username ? (
                    <Button
                      variant="link"
                      className="transparent-button"
                      style={{
                        fontSize: "30px",
                        color: "black",
                        textDecoration: "none",
                        marginLeft: "10em",
                        marginBottom: "60px",
                      }}
                      onClick={() => handleDelete(singRecensione?.id)}
                    >
                      x
                    </Button>
                  ) : (
                    <></>
                  )}
                </h5>
                <p>
                  {" "}
                  {singRecensione?.user?.name} {singRecensione?.user?.surname}{" "}
                </p>
                <h5 className="mb-3">
                  <strong>Valutazione:</strong>
                  {"      "}
                  {singRecensione?.valutazione?.toString()}
                </h5>

                <h5>
                  <strong>Testo recensione:</strong>{" "}
                </h5>
                <p>
                  <strong>{singRecensione?.testoRecensione}</strong>
                </p>
              </div>
            ))}

            {totalPages > 1 && (
              <Pagination className="mt-3">
                <Pagination.First
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                />
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            )}
            <Col xs={6} md={6} className="mt-5">
              <h4>Crea una recensione</h4>

              <Col xs={1}>
                <ModalCreateRecensione
                  UserId={User?.id}
                  AttivitaId={Attivita?.id}
                />
              </Col>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Attivita;
