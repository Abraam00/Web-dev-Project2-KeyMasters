import "./bootstrap.min.css";
import "./App.css";
import QRLanding from "./QRLanding";
import React from "react";
import Admin from "./Admin";
import Login from "./Login";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<QRLanding />} />
    //     <Route path="/Admin" element={<Login />} />
    //     <Route path="/QRLanding" element={<QRLanding />} />
    //   </Routes>
    // </BrowserRouter>
    <Login />
  );
}

export default App;
