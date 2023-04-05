const Lboard = require('../models/note.model.js');

// Create and Save a new Qr code id
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Leadboard content can not be empty"
        });
    }

    // Create a Note
    const lboard = new Lboard({
        teamname: req.body.title || "Untitled team name",
        _found: req.body.content,
        timestamp: req.user
    });

    // Save Note in the database
    lboard.save()
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
    Lboard.find()
        .then(lboard => {
            res.send(lboard);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

/*// Find a single note with a noteId
exports.findOne = (req, res) => {
    Lboard.findById(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            if (note.email == req.user) {
                res.send(note);
            }
            else {
                res.send({});
            }

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.noteId
            });
        });
};*/

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
