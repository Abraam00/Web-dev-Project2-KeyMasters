const Leaderboard = require('../models/leaderboard.revised.js');

// Create and Save a new Qr code id
exports.create = (req, res) => {
    // Validate request
    if (!req.body._found) {
        return res.status(400).send({
            message: "Leaderboard content can not be empty"
        });
    }

    // Create a Note
    const leaderboard = new Leaderboard({
        teamname: req.body.teamname || "Untitled team name",
        _found: req.body._found,
        // published: req.body.published ? req.body.published :false,
        //timestamp: req.user
    });

    // Save Note in the database
    leaderboard.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the qr id."
            });
        });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Leaderboard.find()
        .then(leaderboard => {
            res.send(leaderboard);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};


exports.findAllPublished = (req, res) => { //this needs work to pull teamname and _found
    Leaderboard.find({ published: true }) //need to see all teams and length of array for each team
        .then(data => {
            res.send(data);
        })
        .catch(eer => {
            res.status(500).send({
                message: err.message || "Could not retrieve all published Admins"
            });
        });
};
/*
// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Lboard.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, { new: true })
        .then(lboard => {
            if (!lboard) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.L_id
                });
            }
            res.send(lboard);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.L_id
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.L_id
            });
        });
};
*/