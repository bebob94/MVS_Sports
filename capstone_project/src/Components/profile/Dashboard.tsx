import { Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { USER_BY_USERNAME, userByUsername } from "../../Redux/ActionType/user";
import { useEffect, useState } from "react";
import Error2 from "../Error/Error2";
import ModalModifyUtente from "./ModalModificaUtente";
import ModalModifyAttivita from "./ModalModifyAttivita";
import ModalCreateAttivita from "./ModalCreateAttivita";
import Pagination from "react-bootstrap/Pagination";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { deleteEvento } from "../../Redux/ActionType/Evento";
import {
  ATTIVITA_SPORTIVA_FETCH_BY_ID,
  searchById,
} from "../../Redux/ActionType/AttivitaSportive";

const Dashboard = () => {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const dispatch = useDispatch();
  const userLogged = useSelector((state: RootState) => state?.user.user);
  const user = useSelector((state: RootState) => state?.User.user);
  const Attivita = useSelector(
    (state: RootState) => state?.attivitaSportiva?.AttivitaSportiva
  );
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  const [showModalPOST, setShowModalPOST] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleShowModalPOST = () => {
    setShowModalPOST(true);
  };
  const handleCloseModalPOST = () => {
    setShowModalPOST(false);
  };
  // Fetch del componente
  useEffect(() => {
    (async () => {
      let data = await userByUsername(userLogged.username, token);
      dispatch({
        type: USER_BY_USERNAME,
        payload: data,
      });
    })();
    (async () => {
      let data = await searchById(user.id, token);
      dispatch({
        type: ATTIVITA_SPORTIVA_FETCH_BY_ID,
        payload: data,
      });
    })();
  }, []);

  // Funzione delete
  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Sicuro di voler eliminare l'evento?");
    if (confirmDelete) {
      let x = await deleteEvento(id, token);
      let data = await userByUsername(userLogged.username, token);
      dispatch({
        type: USER_BY_USERNAME,
        payload: data,
      });
    }
  };

  // Paginazione
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = user?.eventi?.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const formatTime = (time: string | number | Date) => {
    const startTime = format(new Date(time), "HH:mm EEEE dd/MM/yyyy", {
      locale: it,
    });
    return ` ${startTime} `;
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
    <div className="DashboardContainer pt-5">
      {user?.username ? (
        <Container>
          <Row>
            <Col md={8} className="mt-5 ">
              <h1 className="mb-5 mt-4">
                Benvenuto {user?.name} {user?.surname}!
              </h1>
            </Col>
          </Row>
          <Row
            style={{ borderBottom: "2px solid black", paddingBottom: "30px" }}
          >
            <strong className="me-3">
              <h2 className="mb-2">I miei dati:</h2>
            </strong>
            <Col md={6}>
              <strong>
                <h4 className="mt-5 mb-4">Utente</h4>
              </strong>
              <p className=" mb-4">
                <strong className="me-3">Nome: </strong>
                {user?.name}
              </p>
              <p className=" mb-4">
                <strong className="me-3">Cognome: </strong>
                {user?.surname}
              </p>
              <p className=" mb-4">
                <strong className="me-3">Email: </strong>
                {user?.email}
              </p>
              <p className=" mb-5">
                <strong className="me-3">Indirizzo: </strong>
                {user?.indirizzo}
              </p>
              <Col xs={1} className="mt-1">
                <ModalModifyUtente userId={user} />
              </Col>
            </Col>
            {user.roles.map((role, i) =>
              role.roleName === "ROLE_COMPANY_OWNER" ? (
                <Col key={i} md={6}>
                  <strong>
                    <h4 className="mt-5 mb-4">Attività</h4>
                  </strong>
                  {Attivita ? (
                    <>
                      <p>
                        <strong className="me-3">Nome: </strong>
                        {Attivita?.nomeAttivita}
                      </p>
                      <p>
                        <strong className="me-3"> Descrizione: </strong>
                        {Attivita?.descrizioneAttivita}
                      </p>
                      <p>
                        <strong className="me-3">Sport: </strong>{" "}
                        {convertSportType(Attivita?.tipoDiSport)}
                      </p>
                      <p>
                        <strong className="me-3">Indirizzo: </strong>
                        {Attivita?.indirizzo}
                      </p>

                      <Col xs={1} className="mt-1">
                        <ModalModifyAttivita AttivitaId={Attivita} />
                      </Col>
                    </>
                  ) : (
                    <Col xs={6} md={6} className="mt-5">
                      <Col xs={1} className="mt-3">
                        <Button
                          style={{ width: "150px" }}
                          onClick={handleShowModalPOST}
                          className="ModalButton rounded-4"
                        >
                          Aggiungi attività
                        </Button>
                        <ModalCreateAttivita
                          show={showModalPOST}
                          handleClose={handleCloseModalPOST}
                          UserId={user?.id}
                        />
                      </Col>
                    </Col>
                  )}
                </Col>
              ) : (
                <></>
              )
            )}
          </Row>
          <Row className="justify-content-between">
            <h2 className="mt-2 mb-2">Prenotazioni create:</h2>
            {user?.eventi.length > 0 ? (
              <>
                {currentEvents?.map((event) => (
                  <Col
                    xs={12}
                    md={4}
                    key={event.id}
                    style={{
                      border: "2px solid black",
                      borderRadius: "10px",
                      padding: "20px",
                      width: "30%",
                      margin: "30px auto",
                    }}
                  >
                    <h4>{event.attivitaSportiva?.nomeAttivita}</h4>
                    <p>
                      <strong className="me-3">Sport: </strong>{" "}
                      {convertSportType(event.attivitaSportiva?.tipoDiSport)}
                    </p>
                    <p>
                      <strong className="me-3">Utente creatore: </strong>
                      {event?.userCreatore.name} {event?.userCreatore.surname}
                    </p>
                    <p>
                      <strong className="me-3">Data e ora: </strong>
                      {formatTime(event?.orarioInizio)}
                    </p>
                    <p>
                      <strong className="me-3">Luogo: </strong>
                      {event.attivitaSportiva?.indirizzo}
                    </p>{" "}
                    <p>
                      <strong>Massimo Partecipanti: </strong>{" "}
                      {event?.attivitaSportiva?.numeroMassimoPartecipanti}
                    </p>{" "}
                    <p>
                      <strong>Partecipanti: </strong>{" "}
                      {event?.numeroPartecipanti.toString()}
                    </p>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(event.id)}
                    >
                      Elimina
                    </Button>
                  </Col>
                ))}
                <Pagination className="justify-content-center">
                  {user?.eventi.length > eventsPerPage && (
                    <Pagination.Prev
                      onClick={() => paginate(currentPage - 1)}
                    />
                  )}
                  {Array.from(
                    Array(Math.ceil(user?.eventi.length / eventsPerPage)).keys()
                  ).map((number) => (
                    <Pagination.Item
                      key={number + 1}
                      active={number + 1 === currentPage}
                      onClick={() => paginate(number + 1)}
                    >
                      {number + 1}
                    </Pagination.Item>
                  ))}
                  {user?.eventi.length > eventsPerPage && (
                    <Pagination.Next
                      onClick={() => paginate(currentPage + 1)}
                    />
                  )}
                </Pagination>
              </>
            ) : (
              <p>Non hai prenotato alcun evento</p>
            )}
          </Row>
        </Container>
      ) : (
        <Error2 />
      )}
    </div>
  );
};

export default Dashboard;
