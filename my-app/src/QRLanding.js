import "./bootstrap.min.css";
import "./App.css";
import cube from "./images/cube.png";
import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function QRLanding() {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamExists, setTeamExists] = useState(false);

  const handleInputChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Team name entered: ${teamName}`);
  };

  return (
    <div className="landingFormGroup">
      <div className="landingGridQR">
        <label className="landingFormLabel">Description</label>
        <textarea className="form-control" rows="5" disabled="true"></textarea>
        <label className="landingFormLabel">Enter team name:</label>
        <input
          className="form-control"
          placeholder="e.g. Sprinters"
          type="text"
          value={teamName}
          onChange={handleInputChange}
        />
        <button className="landingEnterButton" onClick={handleSubmit}>
          Enter
        </button>
      </div>
      <img className="landingImage" src={cube} alt="cube qr code" />
      <button
        className="leaderboardButton"
        onClick={() => setShowLeaderboard(true)}
      >
        Show Leaderboard
      </button>
      {showLeaderboard && <Navigate to="/leaderboard" replace={true} />}
    </div>
  );
}

export default QRLanding;
