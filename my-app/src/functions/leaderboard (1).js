import axios from "axios";
const config = require("../config");

// Get leaderboard data
export function getLeaderboardData() {
  return axios(`${config.API.BASE_URL}/leaderboard`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.data);
}
