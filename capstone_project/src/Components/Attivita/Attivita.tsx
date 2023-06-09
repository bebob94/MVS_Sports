import React, { useEffect, useState } from "react";
import { Row, Col, Container, Pagination, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  ATTIVITA_SPORTIVA_FETCH,
  fetchAttivita,
  searchById,
} from "../../Redux/ActionType/AttivitaSportive";
import "react-datepicker/dist/react-datepicker.css";
import { deleteRecensione } from "../../Redux/ActionType/Recensioni";
import { ATTIVITA_SPORTIVA_FETCH_BY_ID } from "../../Redux/ActionType/AttivitaSportive";
import ModalCreaEvento from "../Modali/ModalCreaEvento";
import ModalCreateRecensione from "../Modali/ModalCreateRecensione";
import { Link } from "react-router-dom";

function Attivita() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  const userLoged = useSelector((state: RootState) => state?.user.user);
  const Attivita = useSelector(
    (state: RootState) => state.attivitaSportiva?.AttivitaSportiva
  );
  const User = useSelector((state: RootState) => state?.User.user);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 2;
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //  Formattazione orario
  const formatTime = (time: string) => {
    return time.substring(0, 5);
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
  }, [Attivita]);

  // Eliminazione evento
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Sicuro di voler eliminare la recensione?"
    );
    if (confirmDelete) {
      let x = await deleteRecensione(id, token);
      let data = await searchById(Attivita.id, token);

      dispatch({
        type: ATTIVITA_SPORTIVA_FETCH_BY_ID,
        payload: data,
      });
    }
  };

  // Paginazione
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = Attivita?.recensioni?.slice(
    indexOfFirstReview,
    indexOfLastReview
  );
  const totalReviews = Attivita?.recensioni?.length;
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

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
    <div className="MyContainer  py-5">
      <Container className="MyAttivita mt-5 ">
        <Row className="py-5 px-5 rounded-4 homeCard mb-5">
          <Col xs={12} md={6}>
            <h1 className="mb-1">{Attivita?.nomeAttivita}</h1>
            <Col xs={12} md={8}>
              <img
                src={Attivita?.image}
                alt={Attivita?.tipoDiSport}
                style={{ height: "15rem", width: "20rem" }}
                className="rounded-4 mt-2"
              />
              <h4 className="mt-2">Descrizione attività:</h4>
              <p>{Attivita?.descrizioneAttivita}</p>
              <h4 className="mt-4">Sport:</h4>
              <p>{convertSportType(Attivita?.tipoDiSport)}</p>
              <h4 className="mt-4">Orario Apertura:</h4>
              <p>{formatTime(Attivita?.orarioApertura?.toString())}</p>
              <h4 className="mt-4">Orario chiusura</h4>
              <p>{formatTime(Attivita?.orarioChiusura?.toString())}</p>
              <h4 className="mt-4">Numero massimo partecipanti: </h4>
              <p>{Attivita?.numeroMassimoPartecipanti}</p>
            </Col>
            <Col xs={6} md={6} className="mt-3">
              <Col xs={1} className="mt-3">
                <ModalCreaEvento UserId={User?.id} AttivitaId={Attivita?.id} />
              </Col>
            </Col>
          </Col>
          <Col xs={12} md={6} className="mt-3">
            <h2 className="mt-5 mb-3">Recensioni attività</h2>
            {currentReviews?.map((singRecensione, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "3px solid  #9bd339",
                }}
              >
                <Row>
                  <Col xs={10} className="mt-3">
                    <h5>
                      <strong>Utente:</strong>
                    </h5>
                    <p>
                      {" "}
                      {singRecensione?.user?.name}{" "}
                      {singRecensione?.user?.surname}{" "}
                    </p>
                  </Col>
                  <Col xs={2} className="mt-2">
                    {" "}
                    {singRecensione?.user?.username === userLoged?.username ? (
                      <Button
                        variant="link"
                        className="transparent-button "
                        style={{
                          fontSize: "30px",
                          color: "white",
                          textDecoration: "none",
                          marginTop: "0",
                          paddingTop: "0",
                        }}
                        onClick={() => handleDelete(singRecensione?.id)}
                      >
                        <i className="bi bi-x-circle"></i>
                      </Button>
                    ) : (
                      <></>
                    )}
                  </Col>
                </Row>
                <h5>
                  <strong>Valutazione:</strong>
                  {"      "}
                </h5>
                <p> {singRecensione?.valutazione?.toString()}</p>

                <h5>
                  <strong>Testo recensione:</strong>{" "}
                </h5>
                <p>{singRecensione?.testoRecensione}</p>
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
              <Col xs={1}>
                <ModalCreateRecensione
                  UserId={User?.id}
                  AttivitaId={Attivita?.id}
                />
              </Col>
            </Col>
          </Col>
        </Row>
        <Row
          className="   justify-content-center"
          style={{
            borderTop: "4px solid  #9bd339",
            paddingTop: "20px",
          }}
        >
          <Col xs={12} className="text-center">
            <Link
              to="/Results"
              className="MyLink"
              style={{ color: " #9bd339" }}
            >
              <strong> Torna alle attività</strong>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Attivita;
