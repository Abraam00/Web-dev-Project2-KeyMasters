const express = require("express");
const router = express.Router();
const lead = express();
const fs = require("fs");
//const Leaderboard = require('../../models/leaderboard.revised.js')
// NOTE: Add middleware to verify requests!
//const middleware = require('../middlewares');
//const qr = require('../controllers/qrcontroller.revised')
const leaderboard = require("../controllers/leaderboard.controller.js");

// Create a new leaderboard entry
router.post("/leaderboard/create", leaderboard.create); //preserve this
router.put("/leaderboard/update", leaderboard.update); //alternate attempt
//router.post('/leaderboard', leaderboard.validate); //alternate attempt

// Retrieve all leaderboard data
// NOTE: Only this one uses verify!
//router.get('/notes', middleware.verify, notes.findAll);
router.get("/leaderboard/top10", leaderboard.tofront);

// Retrieve a single Note with noteId
//router.get('/leaderboard/:leaderboardId', leaderboard.findOne);

// Update a Note with noteId
//router.put('/leaderboard/:leaderboardteamname', leaderboard.update);

// Delete a Note with noteId
//router.delete('/leaderboard/:leaderboardId',leaderboard.delete);
//define a route to reteive the items from database
// Read items from the Json File
// const L_board = JSON.parse(fs.readFileSync("sampledata.json"));
// lead.get("/leaderboard", (req, res) => {
//   res.json(leaderboard);
// });
module.exports = router;
