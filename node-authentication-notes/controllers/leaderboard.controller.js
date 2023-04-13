const Leaderboard = require('../models/leaderboard.revised.js');
//const qrmodelRevised = require('../models/qrmodel.revised.js');

// Create and Save a new Qr code id
exports.update = (req, res) => { //trying to set up alternate method
    if (!req.body._found) {
        return res.status(400).send({
            message: "Leaderboard content can not be empty"
        });
    }


    const query = { teamname: req.body.teamname };
    console.log(query);
    const update = { $push: { teamname: req.body.teamname, _found: [req.body._found] } };
    console.log(update);
    const options = { upsert: true };
    Leaderboard.updateOne(query, update, options);
}


exports.create = (req, res) => {
    // Validate request
    if (!req.body._found) {
        return res.status(400).send({
            message: "Leaderboard content can not be empty"
        });
    }
    // *** need to validate the QR code against the qr collection here *** 
    // *** then need to validate QR and teamname against teamname array in leaderboard collection ***
    // if QR not valid, dump back to leaderboard.
    // if QR valid but teamname doesn't exist, leaderboard.create
    // if QR valid but teamname array already contains, then dump back to leaderboard.
    // if QR valid and teamname array does not contain the URL, then leaderboard.update so the existing
    // team record can add an element to the _found array.  $push will put the data into the array, but $addToSet

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
                message: err.message || "Could not retrieve all published finds"
            });
        });
};

/*
// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body._found) {
        return res.status(400).send({
            message: "url must be provided"
        });
    }
    // if ((teamname = req.body.teamname) && (_found = req.body._found)) {
    //     return res.status(400).send({
    //         message: "Clue already found"
    //     });
    // }

    // Find note and update it with the request body
    Leaderboard.findByIdAndUpdate(req.params.leaderboardId, {
        teamname: req.body.teamname || "Untitled Note",
        _found: req.body._found
    }, { new: true })
        .then(leaderboard => {
            if (!leaderboard) {
                return res.status(404).send({
                    message: "Entry not found with id " + req.params.leaderboardteamname
                });
            }
            res.send(leaderboard);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Entry not found with id " + req.params.leaderboardteamname
                });
            }
            return res.status(500).send({
                message: "Error updating record with id " + req.params.leaderboardteamname
            });
        });
};
*/