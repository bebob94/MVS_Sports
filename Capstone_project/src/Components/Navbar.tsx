import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../image/logoMVS.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER } from "../Redux/ActionType";
import { resetNotificationsForUser } from "../Redux/Actions/Notifica";
import { RootState } from "../Redux/Store";

function MyNavbar() {
  const user = useSelector((state) => state.user);
  const newNotifications = useSelector(
    (state) => state.notifica.NewNotifications
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: USER,
      payload: {},
    });
    navigate("/Login");
  };

  const handleNotificationClick = () => {
    dispatch(resetNotificationsForUser());
  };

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
                onClick={handleNotificationClick}
              >
                <i className="bi bi-bell " style={{ marginRight: "100px" }}></i>
                {newNotifications > 0 && (
                  <div className="notification-badge">{newNotifications}</div>
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
