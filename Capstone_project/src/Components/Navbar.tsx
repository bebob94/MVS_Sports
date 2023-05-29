import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../image/logoMVS.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER } from "../Redux/ActionType";
import {
  ALL_NOTIFICHE,
  deleteNotifiche,
  fetchNotifiche,
} from "../Redux/ActionType/Notifica";
import { RootState } from "../Redux/Store";
import {
  USER_BY_ID,
  USER_BY_USERNAME,
  userById,
  userByUsername,
} from "../Redux/ActionType/user";

function MyNavbar() {
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const user = useSelector((state: RootState) => state?.user);
  const User = useSelector((state: RootState) => state?.User?.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< USE_NAVIGATE, USE_SELECTORE, USE_STATE, USE_DISPATCH >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({
      type: USER,
      payload: {},
    });
    navigate("/Login");
  };

  const handleDeletNotifications = async () => {
    console.log(User);

    let x = await deleteNotifiche(User?.id, user?.user?.accessToken);
    let data = await userById(User?.id, user?.user?.accessToken);

    dispatch({
      type: USER_BY_ID,
      payload: data,
    });
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <Navbar bg="dark" expand="lg" className="pt-0 fixed-top myNav">
      <img
        src={Logo}
        alt="M.V.S.Sports icon"
        style={{ height: "80px", borderRadius: "50%" }}
        className="ms-3 mt-3 me-4"
      />
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ backgroundColor: "white", marginRight: "1em" }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto mt">
          <Link className="MyLink" to={"/"}>
            <strong>Home</strong>
          </Link>
          <Link className="MyLink" to={"/ComeFunziona"}>
            <strong>Come funziona</strong>
          </Link>
          <Link className="MyLink" to={"/Prenotazioni"}>
            <strong>Prenotazioni</strong>
          </Link>
          <Link className="MyLink" to={"/Results"}>
            <strong>Attività</strong>
          </Link>
        </Nav>
        <Nav className="me-2">
          {user.user && user.user.username ? (
            <>
              <strong className="mt-2 me-2">Benvenuto</strong>
              <strong>
                <NavDropdown
                  title={user.user.username}
                  id="basic-nav-dropdown"
                  className="me-3 "
                >
                  <Link className="MyLink  text-dark" to={"/Dashboard"}>
                    <p className="my-0  mx-3 ">Dashboard</p>
                  </Link>
                  <Link className="MyLink my-0 text-dark" to={"/Eventi"}>
                    <p className="my-0  mx-3">Eventi</p>
                  </Link>
                  <Link className="MyLink my-0 text-dark" to={"/ComeFunziona"}>
                    <p className="my-0  mx-3">Come funziona</p>
                  </Link>
                  <Link className="MyLink my-0 text-dark" to={"/AboutUs"}>
                    <p className="my-0  mx-3">AboutUs</p>
                  </Link>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    className="text-dark"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Esci
                  </NavDropdown.Item>
                </NavDropdown>
              </strong>{" "}
              <Link
                className="MyLink pt-2"
                to={"/Eventi"}
                onClick={handleDeletNotifications}
              >
                <i className="bi bi-bell " style={{ marginRight: "100px" }}></i>
                {User?.notifiche && User?.notifiche?.length > 0 && (
                  <div className="notification-badge">
                    {User?.notifiche?.length}
                  </div>
                )}
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"} className="MyLink">
                <span>
                  {" "}
                  <strong>Accedi</strong>
                </span>
              </Link>
              <Link to={"/register"} className="MyLink">
                <span style={{ marginRight: "100px" }}>
                  {" "}
                  <strong>Registrati</strong>
                </span>
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
