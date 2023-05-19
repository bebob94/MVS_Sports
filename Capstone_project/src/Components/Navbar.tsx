import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../image/logoMVS.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER } from "../Redux/ActionType";
import { RESET_NOTIFICHE } from "../Redux/ActionType/Notifica";
import { RootState } from "../Redux/Store";

function MyNavbar() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const myNotification = useSelector(
  //   (state: RootState) => state?.notifica.
  // );
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({
      type: USER,
      payload: {},
    });
    navigate("/Login");
  };
  const handleNotificationClick = () => {
    dispatch({
      type: RESET_NOTIFICHE,
      payload: 0,
    });
  };
  return (
    <Navbar bg="transparent" expand="lg" className="pt-0 fixed-top myNav">
      <img
        src={Logo}
        alt="M.V.S.Sports icon"
        style={{ height: "100px", borderRadius: "50%" }}
        className=" ms-3 mt-3 me-4"
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
          {user.user.username ? (
            <>
              <Link
                className="MyLink"
                to={"/Eventi"}
                onClick={handleNotificationClick}
              >
                <i
                  className="bi bi-bell mt-2 me-4"
                  style={{ color: "white" }}
                ></i>
                {/* {newNotifications > 0 && (
                  <div className="notification-badge">{newNotifications}</div>
                )} */}
              </Link>
              <strong className="mt-2 me-4">Benvenuto</strong>
              <strong style={{ marginRight: "6em" }}>
                <NavDropdown title={user.user.username} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Dashboard" className="text-dark">
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Eventi" className="text-dark">
                    Eventi
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ComeFunziona" className="text-dark">
                    Come funziona
                  </NavDropdown.Item>
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
              </strong>
            </>
          ) : (
            <>
              <Link to={"/login"} className="MyLink">
                <strong>Accedi</strong>
              </Link>
              <Link to={"/register"} className="MyLink">
                <strong>Registrati</strong>
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
