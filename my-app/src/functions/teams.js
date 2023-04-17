import axios from 'axios';
const config = require("../config");

//*** it is unclear whether or not this is the one we want to connect to back end

/*this might not be needed except to populate leaderboard if we can see the size of array or count entries per team
// Make a request to get all users
export function getAllTeamss() {
  return axios(`${config.API.BASE_URL}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.data);
}
*/

// Get user by ID
export function getUserById(userID) {
  return axios(`${config.API.BASE_URL}/users/${userID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.data);
}

// Update a user
export function updateUser(userId, data) {
  return axios(`${config.API.BASE_URL}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(data),
  }).then((response) => response.data);
}

// Delete a user
export function deleteUser(token, userId) {
  return axios(`${config.API.BASE_URL}/users/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.data);
}
