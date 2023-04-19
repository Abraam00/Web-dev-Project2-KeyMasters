import "./bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { showLeaderboard } from "./functions/leaderboardFunctions";

const Leaderboard = () => {
  const [back, setBack] = useState(false);
  const [topTeams, setTopTeams] = useState([
    {
      name: "Dr. Plante",
      score: "9",
      time: "12:00 PM",
    },
    {
      name: "Waleed",
      score: "8",
      time: "12:00 PM",
    },
    {
      name: "Abraam",
      score: "7",
      time: "12:00 PM",
    },
    {
      name: "Dr. Plante",
      score: "9",
      time: "12:00 PM",
    },
    {
      name: "Waleed",
      score: "8",
      time: "12:00 PM",
    },
    {
      name: "Abraam",
      score: "7",
      time: "12:00 PM",
    },
    {
      name: "Dr. Plante",
      score: "9",
      time: "12:00 PM",
    },
    {
      name: "Waleed",
      score: "8",
      time: "12:00 PM",
    },
    {
      name: "Abraam",
      score: "7",
      time: "12:00 PM",
    },
  ]);

  useEffect(() => {
    setTopTeams(showLeaderboard());
  }, []);

  return (
    <>
      {back && <Navigate to="/" replace={true} />}

      {/* Show a leaderboard table of team name and their score */}
      <div className="leaderboardContainer">
        <h1 className="text-center">Leaderboard: Top 10 Teams</h1>
        <div className="leaderboardTableContainer">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="headingText" scope="col">
                  Team Name
                </th>
                <th className="headingText" scope="col">
                  QRs found
                </th>
                <th className="headingText" scope="col">
                  Last Found
                </th>
              </tr>
            </thead>
            <tbody>
              {topTeams.map((team, index) => {
                return (
                  <tr
                    className={
                      index % 2 === 0 ? "table-primary" : "table-secondary"
                    }
                  >
                    <th>{team.teamname}</th>
                    <td>{team.numberOfQRs}</td>
                    <td>{team.updatedAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="backButton" onClick={() => setBack(true)}>
            Go back
          </button>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
