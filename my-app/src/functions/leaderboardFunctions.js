import axios from "axios";
const config = require("../config");

export async function showLeaderboard() {
  return axios.get(`${config.API.BASE_URL}/leaderboard/top10`);
}

// export async function createTeam(team) {
//   console.log("this is what is passed:", team); //not getting anything here?
//   team = "Dog";
//   return axios
//     .post(`${config.API.BASE_URL}/leaderboard/create`,
//       {
//         body: {
//           teamname: team
//         }
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//     .then((response) => console.log(response.data))
//     .catch((err) => console.log(err));
// }

export async function createTeam(team) {
  console.log("this is what is passed:", team); //not getting anything here?
  return axios.post(`${config.API.BASE_URL}/leaderboard/create`,
    {
      "teamname": team,
      "_found": "need to get a url into this"
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
  return await axios
    .put(`${config.API.BASE_URL}/leaderboard/update`,
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
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
}
