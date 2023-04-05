const Admin = require('../models/admin.js');

// Create and Save a new User code id
exports.create = (req, res) => {
    // Validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Admin content can not be empty"
        });
    }

    // Create a Note
    const admin = new Admin({
        title: req.body.title || "Untitled team name",
        content: req.body.content,
    });

    // Save Note in the database
    admin.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Admin id."
            });
        });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Admin.find()
        .then(admin => {
            res.send(admin);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Admin.findById(req.params.noteId)
        .then(admin => {
            if (!admin) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.adminid
                });
            }
            if (admin.adminname == req.user) {
                res.send(note);
            }
            else {
                res.send({});
            }

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.adminid
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.adminid
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
    Admin.findByIdAndUpdate(req.params.adminid, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, { new: true })
        .then(admin => {
            if (!admin) {
                return res.status(404).send({
                    message: "Note not found with  " + req.params.adminid
                });
            }
            res.send(admin);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.adminid
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.adminid
            });
        });
};

// Delete a admin with the specified admin idin the request
exports.delete = (req, res) => {
    Admin.findByIdAndRemove(req.params.adminid)
        .then(admin=> {
            if (!admin) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.adminid
                });
            }
            res.send({ message: "Note deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.adminid
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.params.adminid
            });
        });
};
