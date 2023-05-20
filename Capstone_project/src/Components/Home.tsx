import { Col, Row, Container } from "react-bootstrap";
import Carosello from "./Carosello";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  ATTIVITA_SPORTIVA_FETCH,
  fetchAttivita,
} from "../Redux/ActionType/AttivitaSportive";
import {
  ALL_USERS,
  USER_BY_USERNAME,
  fetchUsers,
  userByUsername,
} from "../Redux/ActionType/user";
import { ALL_EVENTI, fetchEventi } from "../Redux/ActionType/Evento";
import { ALL_NOTIFICHE, fetchNotifiche } from "../Redux/ActionType/Notifica";
import { RootState } from "../Redux/Store";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state?.user.user);
  useEffect(() => {
    (async () => {
      let data = await userByUsername(user.username);

      dispatch({
        type: USER_BY_USERNAME,
        payload: data,
      });
    })();

    (async () => {
      let data = await fetchAttivita();
      dispatch({
        type: ATTIVITA_SPORTIVA_FETCH,
        payload: data,
      });
    })();

    (async () => {
      let data = await fetchUsers();

      dispatch({
        type: ALL_USERS,
        payload: data,
      });
    })();
  }, []);

  return (
    <div className="MyContainer pt-5">
      <Container className="HomeContainer mt-5">
        <h2 className="HomeText2">PRENOTA ONLINE IL TUO CAMPO DA GIOCO</h2>
        <h3 className="HomeSubtext">
          NON TROVI ABBASTANZA COMPAGNI? NON TI PREOCUPARE, CI PENSIAMO NOI!!
        </h3>
      </Container>
      <Row className="justify-content-center mt-2">
        <Col xs={12} md={6} className=" mt-5">
          <Carosello />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
