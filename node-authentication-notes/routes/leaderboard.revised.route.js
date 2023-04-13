const express = require('express');
const router = express.Router();
//const Leaderboard = require('../../models/leaderboard.revised.js')
// NOTE: Add middleware to verify requests!
//const middleware = require('../middlewares');
const qr = require('../controllers/qrcontroller.revised')
const leaderboard = require('../controllers/leaderboard.controller.js');

// Create a new leaderboard entry
router.post('/leaderboard',/* middleware.verify,*/ leaderboard.create); //preserve this
//router.post('/leaderboard',/* middleware.verify,*/ leaderboard.update); //alternate attempt
/*
//alternate format doesn't quite work but modeled on the logic used in old auth.js for avoiding duplicates
router.post('/leaderboard', (req, res) => {
    Leaderboard.findAll({ teamname: req.body.teamname } && { _found: req.body._found })
        .then(leaderboard => {
            if (!leaderboard) res.status(404).json({ error: 'clue already found' })//checks for existing clue
            else {
                leaderboard.update
                //const newUser = User({ teamname: req.body.teamname, password: hash })
                //      newUser.save()
                //        .then(user => {
                //          res.status(200).json({ token: generateToken(user.teamname) })
                // })
                //.catch(error => {
                //  res.status(500).json(error)
                //})
            }
        })
    //}
    // })
});
*/

// Retrieve all leaderboard data
// NOTE: Only this one uses verify!
//router.get('/notes', middleware.verify, notes.findAll);
router.get('/leaderboard',/* middleware.verify, */ leaderboard.findAll);

// Retrieve a single Note with noteId
//router.get('/leaderboard/:leaderboardId', /*middleware.verify,*/  leaderboard.findOne);

// Update a Note with noteId
router.put('/leaderboard/:leaderboardteamname', /*middleware.verify,*/ leaderboard.update);

// Delete a Note with noteId
//router.delete('/leaderboard/:leaderboardId', /*middleware.verify,*/ leaderboard.delete);

module.exports = router;