import axios from "axios";
const config = require("../config");

export async function showLeaderboard() {
  return axios.get(`${config.API.BASE_URL}/leaderboard/top10`);
}

export async function createTeam(team) {
  return await axios
    .post(`${config.API.BASE_URL}/leaderboard/create`,
      { teamName: team },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
}

export async function updateTeam(team, url) {
  return await axios
    .post(`${config.API.BASE_URL}/leaderboard/update`,
      {
        teamName: team,
        _found: url
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
}
