const mongoose = require('mongoose');

//inputting this on the admin page will generate an _id code automatically to be used as unique identifier in URL
const LeaderboardSchema = mongoose.Schema({
    teamname: {  //prepopulated by admin for each created URL and use _id as the QR specific url location
        type: String,
        required: true
    },
    _found: { //number of QR codes found
        type: String,
        required: true
    },
    timestamps: { //do we need this?
        type: String
    }
}, {
    timestamps: true //applies a timestamp to
});

module.exports = mongoose.model('QR', QrSchema);
