import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Prenotazioni from "./Components/Prenotazioni";
import Notifiche from "./Components/Notifiche";
import ComeFunziona from "./Components/ComeFunziona";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Attivita from "./Components/Attivita";
// import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Prenotazioni" element={<Prenotazioni />} />
          <Route path="/Notifiche" element={<Notifiche />} />
          <Route path="/ComeFunziona" element={<ComeFunziona />} />
          <Route path="/Attivita" element={<Attivita />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
