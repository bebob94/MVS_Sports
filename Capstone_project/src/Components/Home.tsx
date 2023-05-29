import { Container } from "react-bootstrap";
import Carosello from "./Carosello";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { USER_BY_USERNAME, userByUsername } from "../Redux/ActionType/user";
import { RootState } from "../Redux/Store";

function Home() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state?.user.user);
  const token = useSelector((state: RootState) => state?.user.user.accessToken);
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  useEffect(() => {
    (async () => {
      let data = await userByUsername(user.username, token);

      dispatch({
        type: USER_BY_USERNAME,
        payload: data,
      });
    })();
  }, []);
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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
