import "./bootstrap.min.css";
import "./App.css";
import cube from "./images/cube.png";
import React, { useState } from "react";
import axios from "axios";

function QR_landing() {
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
        <label className="landingFormLabel">QR Hint</label>
        <textarea className="form-control" rows="5"></textarea>
        <label className="landingFormLabel">Enter team name:</label>
        <input
          className="form-control"
          placeholder="e.g., sprinters"
          type="text"
          value={teamName}
          onChange={handleInputChange}
        />
        <button className="landingEnterButton" onClick={handleSubmit}>
          Enter
        </button>
      </div>
      <img className="landingImage" src={cube} alt="cube qr code" />
    </div>
  );
}

export default QR_landing;
