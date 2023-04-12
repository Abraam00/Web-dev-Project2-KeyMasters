const mongoose = require('mongoose');

//inputting this on the admin page will generate an _id code automatically to be used as unique identifier in URL
const LeaderboardSchema = mongoose.Schema({
    teamname: { //teamname as added by user entering data in the app after scanning QR code
        type: String,
        required: true
    },
    _found: { //array with _id of all QR codes found and the length of the array as total found
        type: String,
        required: true
    }/*,
    timestamps: { //reads the timestamp of most recent found QR code but probably not needed
        type: String 
    }*/
}, {
    timestamps: true //applies a timestamp for updating leaderboard
});

module.exports = mongoose.model('Leaderboard', LeaderboardSchema);
