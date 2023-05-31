import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/Navbar";
import ComeFunziona from "./Components/ComeFunziona";
import Register from "./Components/login_&_register/Register";
import Login from "./Components/login_&_register/Login";
import Attivita from "./Components/Attivita/Attivita";
import Dashboard from "./Components/profile/Dashboard";
import Results from "./Components/Attivita/results";
import Evento from "./Components/Eventi/Evento";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import Prenotazioni from "./Components/Eventi/Prenotazioni";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ComeFunziona" element={<ComeFunziona />} />
          <Route path="/Results" element={<Results />} />
          <Route path="/Attivita/:id" element={<Attivita />} />
          <Route path="/Eventi/" element={<Prenotazioni />} />
          <Route path="/Evento/:id" element={<Evento />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
