import "./bootstrap.min.css";
import "./App.css";
import QRLanding from "./QRLanding";
import React from "react";
import Navbar from "./navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leaderboard from "./Leaderboard";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<QRLanding />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/QRLanding" element={<QRLanding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
