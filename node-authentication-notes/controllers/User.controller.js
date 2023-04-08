const User = require('../models/user.js');

// Create and Save a new User code id
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const user = new User({
        teamname: req.body.teamname || "Untitled team name",
        /*content: req.body.content,*/
        published: req.body.published ? req.body.published : false,
    });

    // Save Note in the database
    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the qr id."
            });
        });
};

// Retrieve and return all qr ids from the database.
exports.findAll = (req, res) => {
    User.find()
        .then(user => {
            res.send(user);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving qr id."
            });
        });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    User.findById(req.params.noteId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            if (user.teamname == req.user) {
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
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    User.findByIdAndUpdate(req.params.noteId, {
        teamname: req.body.teamname || "Untitled Note", //updated
        content: req.body.content
    }, { new: true })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "Note not found with  " + req.params.noteId
                });
            }
            res.send(user);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.noteId
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.noteId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.noteId
                });
            }
            res.send({ message: "Note deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.params.noteId
            });
        });
};
exports.findAllPublished = (req, res) => {
    User.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(eer => {
            res.status(500).send({
                message: err.message || "Could not retrieve all published Admins"
            });
        });
};
