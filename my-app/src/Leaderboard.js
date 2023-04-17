import "./bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Leaderboard = () => {
  const [back, setBack] = useState(false);
  const [topTeams, setTopTeams] = useState([
    {
      name: "Dr. Plante",
      score: "9",
    },
    {
      name: "Waleed",
      score: "8",
    },
    {
      name: "Abraam",
      score: "7",
    },
    {
      name: "Dr. Plante",
      score: "9",
    },
    {
      name: "Waleed",
      score: "8",
    },
    {
      name: "Abraam",
      score: "7",
    },
    {
      name: "Dr. Plante",
      score: "9",
    },
    {
      name: "Waleed",
      score: "8",
    },
    {
      name: "Abraam",
      score: "7",
    },
  ]);

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
                    <th>{team.name}</th>
                    <td>{team.score}</td>
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
