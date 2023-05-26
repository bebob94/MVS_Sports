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
import { RootState } from "../Redux/Store";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state?.user.user);
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  useEffect(() => {
    (async () => {
      let data = await userByUsername(user.username, token);

      dispatch({
        type: USER_BY_USERNAME,
        payload: data,
      });
    })();
  }, []);

  return (
    <div className="MyContainer pt-5">
      <Container style={{ marginTop: "5em " }}>
        <h3 className="HomeText2">PRENOTA ONLINE IL TUO CAMPO DA GIOCO</h3>
        <h5 className="HomeSubtext">
          NON TROVI ABBASTANZA COMPAGNI? NON TI PREOCUPARE, CI PENSIAMO NOI!!
        </h5>
      </Container>
      <Carosello />
    </div>
  );
}

export default Home;
