import "./bootstrap.min.css";
import "./App.css";
import cube from "./images/cube.png";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { createTeam, updateTeam } from "./functions/leaderboardFunctions";

function QRLanding() {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [teamName, setTeamName] = useState("");
  /* it seems to me that we need a variable to capture the url of the scanned QR code to credit
   the team with finding it. This should probably be reflected in the handlers below (if teamname entered
    then capture the current URL so it can be checked against the db */

  const handleInputChange = (event) => {
    setTeamName(event.target.value);
    console.log(event.target.value);
  };

  // useEffect(() => {
  //   if (teamName) {
  //     createTeam(`${teamName}`);
  //   }
  // }, [teamName]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   //console.log("Team name entered:"` ${teamName}`);
  //   setTeamName(teamName);
  //   updateTeam(`${teamName}`, "url to be retrieved");
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Team name entered: ${teamName}`);
    try {
      createTeam(teamName);
      //updateTeam(teamName); //it seems that trying updateTeam first and if 404 then createTeam
      //would be a more streamlined approach requiring a single handler.

    } catch (error) { createTeam(teamName) };

    // createTeam(teamName);

    //updateTeam(`${teamName}`, "need to get a url into this"); //this will not duplicate entry with hardcoded string
  };

  return (
    <div className="landingFormGroup">
      <img className="landingImage" src={cube} alt="cube qr code" />
      <div className="landingGridQR">
        <label className="landingFormLabel">Description</label>
        <textarea className="form-control" rows="5" disabled={true}></textarea>
        <label className="landingFormLabel">Enter team name:</label>
        <input
          className="form-control"
          placeholder="e.g. Sprinters"
          type="text"
          value={teamName}
          onChange={handleInputChange}
        />
        <div className="buttonContainer">
          <button className="landingEnterButton" onClick={handleSubmit}>
            Enter
          </button>
          <button
            className="leaderboardButton"
            onClick={() => setShowLeaderboard(true)}
          >
            Show Leaderboard
          </button>
          {showLeaderboard && <Navigate to="/leaderboard" replace={true} />}
        </div>
      </div>
    </div>
  );
}

export default QRLanding;
