const QR = require('../models/qrmodel.revised.js');

// Create and Save a new Qr code id
exports.create = (req, res) => {
    // Validate request
    if (!req.body.url) { //requires a URL in the field to proceed
        return res.status(400).send({
            message: "URL field can not be empty"
        });
    }

    // Create a QR code entry
    const qr = new QR({
        url: req.body.url || "Untitled QR code",
        description: req.body.description,
        //body: req.user
    });

    // Save QR code entry in the database
    qr.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while saving the QR code entry."
            });
        });
};
//I'm not sure we need the rest of this code.  Need to establish how this can loop to read the entire JSON
//of all the QR urls and descriptions.  Is there a batch function? I haven't researched it myself.

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    QR.find()
        .then(qr => {
            res.send(qr);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

// Find a single note with a qrurl 
exports.findOne = (req, res) => {
    QR.findByUrl(req.params.qrurl)
        .then(qr => {
            if (!qr) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.qrid
                });
            }
            if (qr.body == req.user) {
                res.send(qr);
            }
            else {
                res.send({});
            }

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.qrid
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.qrid
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
    QR.findByIdAndUpdate(req.params.noteId, {
        url: req.body.title || "Untitled Note",
        body: req.body.content
    }, { new: true })
        .then(qr => {
            if (!qr) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.qrid
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.qrid
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.noteId
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    QR.findByIdAndRemove(req.params.noteId)
        .then(qr => {
            if (!qr) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.qrid
                });
            }
            res.send({ message: "Note deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.qrid
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.params.qrid
            });
        });
};*/
