const mongoose = require('mongoose');

//inputting this on the admin page will generate an _id code automatically to be used as unique identifier in URL
const QrSchema = mongoose.Schema({
    url: {  //prepopulated by admin for each created URL and use _id as the QR specific url location
        type: String,
        required: true
    },
    description: { //optional content field read from JSON load (maybe clue, maybe empty field)
        type: String,
        required: true
    }/*,
    body: { //this probably not necessary
        type: String
    }*/
}, {
    timestamps: true
});

module.exports = mongoose.model('QR', QrSchema);
