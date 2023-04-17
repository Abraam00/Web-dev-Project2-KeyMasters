const { application } = require('express');
const Leaderboard = require('../models/leaderboard.revised.js');
//const config = require("./config");
const QR = require('../models/qrmodel.revised.js');  //added to try having a unified controller

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
// this is my latest attempt to link all of the steps as I see it into one flow, but there are problems
/*

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
    QR.findOne; //trying to pass the qr url to the db to check it (see step 2 below)
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
            Leaderboard.update;  //if qr is valid, then go run the update (see step 3 below)
            //res.send(qr);
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message,
            });
        });
};

//alternate path - step 2.5 trying get teamname into usable format but it doesn't work
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

*/

// exports.validate = async (req, res) => {
//     const valid = await QR.findOne(
//         { url: req.body._found },
//     )
//     res.send({ valid });
// }


// exports.update = async (req, res) => { //alternate idea trying to validate URL
//     // Find and update the leaderboard for that team
//     //const valid = true;
//     const valid = await QR.findOne(
//         { url: req.body._found },
//     )
//     //return valid;
//     if (valid === true) { //maybe not this?
//         await Leaderboard.updateOne(
//             { teamname: req.body.teamname },
//             { $addToSet: { _found: { $each: [req.body._found] } } }
//         );
//         console.log("updated");
//         res.send({ message: "Leaderboard updated successfully" });
//     }
//     else {
//         res.send({ message: "invalid code" });
//     }//maybe not this?
// };


exports.update = async (req, res) => {
    // Find and update the leaderboard for that team
    await Leaderboard.updateOne(
        { teamname: req.body.teamname },
        { $addToSet: { _found: { $each: [req.body._found] } } }
    );
    console.log("updated");
    res.send({ message: "Leaderboard updated successfully" });

};

exports.tofront = async (req, res) => {
    const size = await leaderboard.aggregate([
        {
            $project: {
                _id: 0,
                teamname: 1,
                numberOfQRs: {
                    $cond: {
                        if: { $isArray: "$_found" },
                        then: { $size: "$_found" },
                        else: "0",
                    },
                },
            },
        },
    ]);
    size.sort((a, b) => Number(b.numberOfQrs) - Number(a.numberOfQRs));
    console.log(size);
    res.send(size);
}; //add timestamp to this as well!!


/*
},
    { new: true }
)
    .then((leaderboard) => {  //update leaderboard if team is found
        if (!leaderboard) {
            //     return leaderboard.create(req.body);  //if the team isn't in leaderboard, then create
            //     // return res.status(404).send({
            //     //   message: "Team not found",
            //     // });
        }
        res.send({ message: "Leaderboard updated successfully" });
    })
    .catch((err) => {
        return res.status(500).send({
            message: err.message,
        });
    });
};




//close it off here if it doesn't work
*/
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