import "./bootstrap.min.css";
import "./App.css";
import cube from "./images/cube.png";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  createTeam,
  updateTeam,
  validateQR,
} from "./functions/leaderboardFunctions";

function QRLanding() {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [URL, seturl] = useState("");

  // seturl(window.location.href);  this is causing the re-renders problem

  //  it seems to me that we need a variable to capture the url of the scanned QR code to credit
  //  the team with finding it. This should probably be reflected in the handlers below (if teamname entered
  //   then capture the current URL so it can be checked against the db 
  //console.log(URL);
  const handleInputChange = (event) => {
    setTeamName(event.target.value);
    console.log(event.target.value);
  };

  // useEffect(() => {
  //   if (teamName) {
  //     createTeam(`${teamName}`);
  //   }
  // }, [teamName]);


  // this code would make the scanner HTMl
  //<div id ="scanner-container">
  //<video id = "scanner-video"></video>
  //</div>

  //this would be the script for the code I believe 
  // const scanner = new QRscanner(document.getElementbyId("scanner-video"), result=>{
  //const url = result;
  //createTeam(url); Calls the createTeam function with extracted url
  //updateteam(url); This calls the updated team with extracted url 
  //});

  //scanner.start(); obv starts the scanner



  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   //console.log("Team name entered:"` ${teamName}`);
  //   setTeamName(teamName);
  //   updateTeam(`${teamName}`, "url to be retrieved");
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Team name entered: ${teamName}`);
    const url = URL;

    try {
      //need if statement here to say if updateTeam() is successful, then return to leaderboard else run createTeam()
      //this currently works if it is a new team...they get added with url hardcoded above.  BUT if existing team, then
      //the existing entry is updated AND a new entry is created.

      //createTeam(teamName, url);
      updateTeam(teamName, url); //it seems that trying updateTeam first and if 404 then createTeam
      //would be a more streamlined approach requiring a single handler.
    } catch (error) {
      /*createTeam(teamName) */
    }

    createTeam(teamName, url); //this function second if the update finds no team to update
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
