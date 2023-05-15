import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { USER_BY_USERNAME, userByUsername } from "../../Redux/ActionType/user";
import { useEffect } from "react";
import Error2 from "../Error2";
import ModalModifyUtente from "./ModalModificaUtente";
import ModalModifyAttivita from "./ModalModifyAttivita";

const Dashboard = () => {
  const dispatch = useDispatch();

  const userLogged = useSelector((state: RootState) => state?.user.user);

  const user = useSelector((state: RootState) => state?.User.user);

  useEffect(() => {
    (async () => {
      let data = await userByUsername(userLogged.username);
      console.log(data);

      dispatch({
        type: USER_BY_USERNAME,
        payload: data,
      });
    })();
  }, []);

  return (
    <div className="MyContainer pt-5">
      {user?.username ? (
        <Container className="mt-5 text-light">
          <Row>
            <Col md={8}>
              <h1 className="mb-5 mt-4">
                Benvenuto {user?.name} {user?.surname}!
              </h1>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <strong className="me-3">
                <h2 className="mb-5">I miei dati</h2>
              </strong>
              <p>
                {" "}
                <strong className="me-3">Nome: </strong>
                {user?.name}
              </p>
              <p>
                {" "}
                <strong className="me-3">Cognome: </strong>
                {user?.surname}
              </p>
              <p>
                {" "}
                <strong className="me-3">Email: </strong>
                {user?.email}
              </p>
              <p>
                {" "}
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
                  <p>
                    <strong className="me-3">Nome: </strong>
                    {user?.attivitaSportiva?.nomeAttivita}
                  </p>
                  <p>
                    <strong className="me-3"> Descrizione: </strong>
                    {user?.attivitaSportiva?.descrizioneAttivita}
                  </p>
                  <p>
                    <strong className="me-3">Sport: </strong>{" "}
                    {user?.attivitaSportiva?.tipoDiSport}
                  </p>
                  <p>
                    <strong className="me-3">Indirizzo: </strong>
                    {user?.attivitaSportiva?.indirizzo}
                  </p>
                  {user.attivitaSportiva ? (
                    <Col xs={1} className="mt-1">
                      <ModalModifyAttivita AttivitaId={user.attivitaSportiva} />
                    </Col>
                  ) : (
                    <></>
                  )}
                </Col>
              ) : (
                <></>
              )
            )}
          </Row>
          <Row>
            <Col>
              <h2 className="mt-5 mb-5">Eventi prenotati</h2>
            </Col>
          </Row>
          <Row>
            {user?.eventi.map((event, i) => (
              <Col key={i} md={4} className=" mb-5">
                <h3 className=" mb-3">{event?.attivitaSportiva.tipoDiSport}</h3>
                <strong>
                  <p>Inizio: {event?.orarioInizio.toLocaleString()}</p>
                  <p>Fine: {event?.orarioFine.toLocaleString()}</p>
                  <p>Partecipanti: {event?.numeroPartecipanti.toString()}</p>
                  <p>
                    Creato da: {event?.userCreatore.name}{" "}
                    {event?.userCreatore.surname}
                  </p>
                  <p>Attività: {event?.attivitaSportiva.nomeAttivita}</p>
                </strong>
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Error2 />
      )}
    </div>
  );
};

export default Dashboard;
