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
  ]);

  return (
    <>
      {back && <Navigate to="/" replace={true} />}

      {/* Show a leaderboard table of team name and their score */}
      <div className="leaderboardContainer d-flex">
        <div className="d-flex flex-column leaderboardTableContainer">
          {/* Show heading in center */}
          <h1 className="text-center">Top 10 teams</h1>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Team Name</th>
                <th scope="col">QRs found</th>
              </tr>
            </thead>
            <tbody>
              {topTeams.map((team, index) => {
                return (
                  <tr
                    className={index % 2 === 0 ? "table-primary" : "table-info"}
                  >
                    <th>{team.name}</th>
                    <td>{team.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="QrHintButton" onClick={() => setBack(true)}>
            Back to Scan another QR
          </button>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
