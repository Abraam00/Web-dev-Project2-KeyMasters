import "./bootstrap.min.css";
import "./App.css";
import cube from "./images/cube.png";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  createTeam,
  updateTeam,
  validateQR,
  getHint,
} from "./functions/leaderboardFunctions";
//the import below generates error so commented out
//import { findHint } from "../../node-authentication-notes/controllers/qrcontroller.revised.js"; 

function QRLanding() {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [teamName, setTeamName] = useState("");
  const URL = window.location.href;
  //const hint = (findHint(URL)); //couldn't make this work with other functions
  const hint = ("");


  const handleInputChange = (event) => {
    setTeamName(event.target.value);
    console.log(event.target.value);
  };


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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Team name entered: ${teamName}`);
    const url = URL;
    //const url = "https://sshqr.com/randomsequence5"; //use this for testing.

    try {

      // await getHint(url);  this isn't working
      //console.log("leaving gethint");
      await validateQR(url);
      console.log("leaving validate");
      await updateTeam(teamName, url);
      console.log("leaving update");
      // await validateQR(url);
      // console.log("leaving validate again");
      await createTeam(teamName, url); //only runs if the update response is status 404
      console.log("team added to db");
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="landingFormGroup">
      <img className="landingImage" src={cube} alt="cube qr code" />
      <div className="landingGridQR">
        <label className="landingFormLabel">Description</label>
        <textarea className="form-control" rows="5" disabled={true}>
          {hint}
        </textarea>
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
