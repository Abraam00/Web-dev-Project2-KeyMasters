import axios from "axios";
const config = require("../config");

export async function showLeaderboard() {
  return await axios
    .get(`${config.API.BASE_URL}/leaderboard/top10`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .catch((err) => console.log(err));
}
