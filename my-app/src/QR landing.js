import "./bootstrap.min.css";
import "./App.css";
import Navbar from "./navbar";
import cube from "./images/cube.png";
import React, { useState } from "react";

function QR_landing() {
  const [teamName, setTeamName] = useState("");

  const handleInputChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Team name entered: ${teamName}`);
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="landing-form-group">
        <div className="landing-grid-qr">
          <label className="landing-form-label">QR Hint</label>
          <textarea className="form-control" rows="5"></textarea>
          <label className="landing-form-label">Enter team name:</label>
          <input
            className="form-control"
            placeholder="e.g., sprinters"
            type="text"
            value={teamName}
            onChange={handleInputChange}
          />
          <button className="landing-enter-button" onClick={handleSubmit}>
            Enter
          </button>
        </div>
        <img className="landing-image" src={cube} alt="cube qr code" />
      </div>
    </React.Fragment>
  );
}

export default QR_landing;
