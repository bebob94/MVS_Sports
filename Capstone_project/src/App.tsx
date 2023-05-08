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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Prenotazioni" element={<Prenotazioni />} />
          <Route path="/Notifiche" element={<Notifiche />} />
          <Route path="/ComeFunziona" element={<ComeFunziona />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
