import "./bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [teamName, setTeamName] = useState("");
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
  const handleInputChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Team name entered: ${teamName}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter team name:
          <input type="text" value={teamName} onChange={handleInputChange} />
        </label>
        <button type="submit">Enter</button>
      </form>

      {/* Show heading in center */}
      <h1 className="text-center">Top 10 teams</h1>

      {/* Show a leaderboard table of team name and their score */}
      <div className="container d-flex flex-column justify-content-center align-items-center">
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

        {/* Show button at the center to add more QR */}
        <button className="btn btn-primary mb-3" type="button">
          Sacn another QR
        </button>
      </div>
    </>
  );
}

export default App;
