import axios from 'axios';
const config = require("../config");
//***  It is unclear if this is the format we want to connect to the back end

/* this functionality not required
// Make a request to get all notes
export function getAllNotes(token) {
  return axios(`${config.API.BASE_URL}/notes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.data);
}
*/

// Get notes of a user
export function getRecordsOfUser(teamName) { //should this be leaderboardId?
  return axios(`${config.API.BASE_URL}/leaderboard/teamname`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    },
    params: {
      teamName,
    },
  }).then((response) => response.data);
}

// Create a note
export function createRecord(teamName, data) {
  return axios(`${config.API.BASE_URL}/leaderboard`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(data),
    params: {
      teamName, _found,
    },
  }).then((response) => response.data);
}

// Update a note
export function updateRecord(teamName, url, data) {
  return axios(`${config.API.BASE_URL}/leaderboard/${url}`, { //check this... need the url scanned for crediting team
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    },
    data: JSON.stringify(data),
    params: {
      teamName, _found,
    },
  }).then((response) => response.data);
}
/*  This section not needed
// Delete a note
export function deleteNote(token, userId, noteId) {
  return axios(`${config.API.BASE_URL}/notes/${noteId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Bearer ${token}`,
    },
    params: {
      userId,
    },
  }).then((response) => response.data);
}
*/
