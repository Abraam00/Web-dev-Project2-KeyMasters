import axios from "axios";
const config = require("../config");

export async function showLeaderboard() {
  return axios.get(`${config.API.BASE_URL}/leaderboard/top10`);
}
//trying to set up qr validation for team post/put
export async function validateQR(url) {
  console.log(url);
  return axios.post(`${config.API.BASE_URL}/leaderboard/qr`,
    { "url": url },
    {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => console.log(url, response.data))
    .catch((err) => console.log(err));
}

export async function createTeam(team, url) {
  console.log("this is what is passed:", team, url);
  return axios.post(`${config.API.BASE_URL}/leaderboard/create`,
    {
      "teamname": team,
      "_found": url//"need to get a url into this"
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => console.log(team, response.data))
    .catch((err) => console.log(err));
}

export async function updateTeam(team, url) {
  console.log("this is what is passed to update:", team, url);
  return await axios.put(`${config.API.BASE_URL}/leaderboard/update`,
    {
      "teamname": team,
      "_found": url
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => console.log(response.data, response.status))
    .catch((err) => console.log(err));
}
