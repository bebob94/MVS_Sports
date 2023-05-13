import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../image/logoMVS.jpg";
import ComeFunziona from "./ComeFunziona";
import { Link } from "react-router-dom";
import Home from "./Home";
import Prenotazioni from "./Prenotazioni";
import Notifiche from "./Notifiche";
import { RootState } from "../Redux/ActionType";
import { useDispatch, useSelector } from "react-redux";
import { USER } from "../Redux/ActionType";

function MyNavbar() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({
      type: USER,
      payload: {},
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
          <Link className="MyLink" to={"/"} onClick={Home}>
            <strong>Home</strong>
          </Link>
          <Link className="MyLink" to={"/ComeFunziona"} onClick={ComeFunziona}>
            <strong>Come funziona</strong>
          </Link>
          <Link className="MyLink" to={"/Prenotazioni"} onClick={Prenotazioni}>
            <strong>Prenotazioni</strong>
          </Link>
          <Link className="MyLink" to={"/Notifiche"} onClick={Notifiche}>
            <strong>Notifiche</strong>
          </Link>
        </Nav>
        <Nav className="me-2">
          {user.user.username ? (
            <>
              <strong className="mt-2 me-4">Benvenuto</strong>
              <strong style={{ marginRight: "6em" }}>
                <NavDropdown title={user.user.username} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Dashboard" className="text-dark">
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="text-dark">
                    Impostazioni
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/ComeFunziona" className="text-dark">
                    Come funziona
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#action/3.4"
                    className="text-dark"
                    onClick={handleSubmit}
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
