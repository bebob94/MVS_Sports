import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../image/logoMVS.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER } from "../Redux/ActionType";
import { deleteNotifiche } from "../Redux/ActionType/Notifica";
import { RootState } from "../Redux/Store";
import { USER_BY_ID, userById } from "../Redux/ActionType/user";
import { format } from "date-fns";
import { it } from "date-fns/locale";

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
    const confirmDelete = window.confirm(
      "vuoi andare alla sezione prenotazioni?"
    );
    if (confirmDelete) {
      let x = await deleteNotifiche(User?.id, user?.user?.accessToken);
      let data = await userById(User?.id, user?.user?.accessToken);
      dispatch({
        type: USER_BY_ID,
        payload: data,
      });
      navigate("/Eventi");
    }
  };

  const formatTime = (time: string | number | Date) => {
    const startTime = format(new Date(time), "HH:mm EEEE dd/MM/yyyy", {
      locale: it,
    });
    return ` ${startTime} `;
  };
  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNZIONI DEL COMPONENTE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  return (
    <>
      <img src={Logo} alt="M.V.S.Sports icon" className=" mt-3 myImage" />
      <Navbar expand="lg" className=" pt-0 fixed-top myNav">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            backgroundColor: "#9bd339",
            marginRight: "1em",
            marginLeft: "15em",
          }}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            marginLeft: "10em",
            background: "lineargradient(rgb(4, 58, 20), black)",
          }}
          className="rounded-2 myCollapse"
        >
          <Nav className="me-auto ">
            <Link className="MyLink " to={"/"}>
              <strong className="navText">Home</strong>
            </Link>
            <Link className="MyLink" to={"/ComeFunziona"}>
              <strong className="navText">Come funziona</strong>
            </Link>
            <Link className="MyLink" to={"/Results"}>
              <strong className="navText">Attività</strong>
            </Link>
            <Link className="MyLink" to={"/Eventi"}>
              <strong className="navText">Prenotazioni disponibili</strong>
            </Link>
          </Nav>
          <Nav className="mt-2">
            {user.user && user.user.username ? (
              <>
                <strong className="mt-2  me-2">Benvenuto</strong>
                <strong>
                  <NavDropdown
                    title={
                      <span className="navText">{user.user.username}</span>
                    }
                    id="basic-nav-dropdown"
                    className="me-3 "
                  >
                    <Link className="navText " to={"/Dashboard"}>
                      <p className="my-2  mx-3 ">Dashboard</p>
                    </Link>
                    <Link className="navText my-0 text-dark" to={"/Eventi"}>
                      <p className="my-2  mx-3">Prenotazioni</p>
                    </Link>
                    <Link
                      className="navText my-0 text-dark"
                      to={"/ComeFunziona"}
                    >
                      <p className="my-2  mx-3">Come funziona</p>
                    </Link>
                    <Link className="navText my-0 text-dark" to={"/AboutUs"}>
                      <p className="my-2  mx-3">AboutUs</p>
                    </Link>

                    <NavDropdown.Item
                      className="navText "
                      style={{ borderTop: "2px solid #9bd339 " }}
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      <strong>Esci</strong>
                    </NavDropdown.Item>
                  </NavDropdown>
                </strong>{" "}
                {User?.notifiche && User?.notifiche?.length > 0 && (
                  <div className="notification-badge">
                    {User?.notifiche?.length}
                  </div>
                )}
                <NavDropdown
                  title={<i className="bi bi-bell "></i>}
                  id="basic-nav-dropdown"
                  style={{ width: "15em" }}
                >
                  {User?.notifiche.length === 0 ? (
                    <p className="mx-3 pt-2 navText">Nessuna notifica</p>
                  ) : (
                    User?.notifiche.map((notifica, i) => (
                      <NavDropdown.Item
                        key={i}
                        style={{ borderBottom: "2px solid #9bd339 " }}
                        className=" ms-0"
                        onClick={handleDeletNotifications}
                      >
                        <p className="my-0 mb-2 navText">
                          {" "}
                          Nuova prenotazione avviata{" "}
                        </p>
                        <p className="my-0 navText">
                          {notifica?.attivitaSportiva?.nomeAttivita}
                        </p>
                        <p className="my-0 navText">
                          {formatTime(notifica?.evento?.orarioInizio)}
                        </p>
                      </NavDropdown.Item>
                    ))
                  )}
                </NavDropdown>
              </>
            ) : (
              <>
                <Link to={"/login"} className="navText me-3">
                  <span>
                    {" "}
                    <strong>Accedi</strong>
                  </span>
                </Link>
                <Link to={"/register"} className="navText me-5">
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
    </>
  );
}

export default MyNavbar;
