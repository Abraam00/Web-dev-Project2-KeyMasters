const express = require('express');
const router = express.Router();
//const Leaderboard = require('../../models/leaderboard.revised.js')
// NOTE: Add middleware to verify requests!
//const middleware = require('../middlewares');
//const qr = require('../controllers/qrcontroller.revised')
const leaderboard = require('../controllers/leaderboard.controller.js');

// Create a new leaderboard entry
router.post('/leaderboard', leaderboard.create); //preserve this
//router.post('/leaderboard', leaderboard.update); //alternate attempt



// Retrieve all leaderboard data
// NOTE: Only this one uses verify!
//router.get('/notes', middleware.verify, notes.findAll);
router.get('/leaderboard', leaderboard.findAll);

// Retrieve a single Note with noteId
//router.get('/leaderboard/:leaderboardId', leaderboard.findOne);

// Update a Note with noteId
//router.put('/leaderboard/:leaderboardteamname', leaderboard.update);

// Delete a Note with noteId
//router.delete('/leaderboard/:leaderboardId',leaderboard.delete);

module.exports = router;