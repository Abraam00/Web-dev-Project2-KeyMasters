const Leaderboard = require('../models/leaderboard.revised.js');
//const config = require("./config");
const QR = require('../models/qrmodel.revised.js');

// Create and Save a new _found qr code:

/*
exports.update = (req, res) => { //trying to set up alternate method
    if (!req.body._found) {
        return res.status(400).send({
            message: "Leaderboard content can not be empty"
        });
    }
    var MongoClient = require('mongodb').MongoClient;
    const client = "mongodb://127.0.0.1/pies";
    MongoClient.connect(client, function (err, db) {
        if (err) throw err;



        const database = db.db("pies");
        const coll = database.collection("leaderboards");

        const filter = { teamname: req.body.teamname };
        console.log(filter);
        const update = { $push: { teamname: req.body.teamname, _found: [req.body._found] }, };
        console.log(update);
        //const options = {};
        const options = { upsert: true };
        //coll.updateOne(filter, update, options);
        const result = coll.updateOne(filter, update, options, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
        }); //can't get this to update
        console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,);
    });

}

*/
// this is an attempt to link all of the steps as I see it into one flow.


//the idea of this starting point is to check front end information.
//step 1 is to see if a url and teamname are in the body
exports.validate = (req, res) => {
    if (!req.body._found) {
        return res.status(400).send({
            message: "HEY!! Leaderboard content can not be empty"
        });
    }
    if (!req.body.teamname) {
        return res.status(400).send({
            message: "Team name required"
        });
    }
    //else { Leaderboard.update }
    QR.findOne; //trying to pass the 
};
//step 2 should be to verify validity of QR code against db
exports.findOne = (req, res) => {
    QR.findById(req.body._found)
        .then((qr) => {
            if (!qr) {
                return res.status(404).send({
                    message: "QR not found",
                });
            }
            Leaderboard.update;
            //res.send(qr);
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message,
            });
        });
};

//alternate path - step 2.5 should get teamname into usable format
exports.restrictToSelf = (role) => {
    return (req, res, next) => {
        // Get user id from request
        let leaderboardId;
        if (req.route.path === "/leaderboard/:id") {
            leaderboardId = req.params.id;
        } else if (req.query) {
            leaderboardId = req.query.leaderboardId;
        }

        if (req.leaderboard._id === leaderboardId || req.user.role === role) {
            Leaderboard.update; //next(); //update 
        } else {
            Leaderboard.create; //create leaderboard
            res
                .json({ error: "I think this worked" });
            //.status(403)
            // .json({ error: "you are not authorized to perform this action" });
        }
    };
};


//step 3 should update the team's array (if new team then create team)


exports.update = (req, res) => {
    // Find and update the leaderboard for that team
    Leaderboard.findByIdAndUpdate(req.params.id, 
        {
        teamname: req.body.teamname || undefined,
        _found: req.body._found || undefined,
    },
    {new:true}
    )
        .then((leaderboard) => {
            if (!leaderboard) {
                return leaderboard.create(req.body);
                // return res.status(404).send({
                //   message: "Team not found",
                // });
            }
            res.send({ message: "Leaderboard updated successfully" });
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message,
            });
        });
};

//}


//close it off here if it doesn't work


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