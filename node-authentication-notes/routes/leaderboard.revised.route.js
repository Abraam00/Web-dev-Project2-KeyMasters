const express = require('express');
const router = express.Router();
//const Leaderboard = require('../../models/leaderboard.revised')
// NOTE: Add middleware to verify requests!
//const middleware = require('../middlewares');

const leaderboard = require('../controllers/leaderboard.controller.js');

// Create a new leaderboard entry
router.post('/leaderboard',/* middleware.verify,*/ leaderboard.create);

// Retrieve all leaderboard data
// NOTE: Only this one uses verify!
//router.get('/notes', middleware.verify, notes.findAll);
router.get('/leaderboard',/* middleware.verify, */ leaderboard.findAll);
/*
// Retrieve a single Note with noteId
router.get('/leaderboard/:noteId', /*middleware.verify,  leaderboard.findOne);

// Update a Note with noteId
router.put('/leaderboard/:noteId', /*middleware.verify, leaderboard.update);

// Delete a Note with noteId
router.delete('/leaderboard/:noteId', /*middleware.verify, leaderboard.delete);
*/
module.exports = router;