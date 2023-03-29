import "./bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [teamName, setTeamName] = useState("");

  const handleInputChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Team name entered: ${teamName}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter team name:
        <input type="text" value={teamName} onChange={handleInputChange} />
      </label>
      <button type="submit">Enter</button>
    </form>
  );
}

export default App;
