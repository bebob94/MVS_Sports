import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../logoMVS.jpg";
import ComeFunziona from "./ComeFunziona";
import { Link } from "react-router-dom";
import Home from "./Home";
import Prenotazioni from "./Prenotazioni";
import Notifiche from "./Notifiche";

function MyNavbar() {
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
          <strong>
            <NavDropdown title="Nome Utente" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Impostazioni
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Le tue prenotazioni
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Esci</NavDropdown.Item>
            </NavDropdown>
          </strong>
          <Nav.Link href="#login">
            <strong>Accedi</strong>
          </Nav.Link>
          <Nav.Link href="#register">
            <strong>Registrati</strong>
          </Nav.Link>
        </Nav>
        <i
          className="bi bi-person-circle me-4"
          style={{ fontSize: "2rem", color: "white" }}
        ></i>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
