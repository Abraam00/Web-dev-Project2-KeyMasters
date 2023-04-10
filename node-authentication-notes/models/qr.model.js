/*const mongoose = require('mongoose');

//inputting this on the admin page will generate an _id code automatically to be used as unique identifier in URL
const QrSchema = mongoose.Schema({
    url: {  //prepopulated by admin for each created URL and use _id as the QR specific url location
        type: String,
        required: true
    },
    Qindex: { //Index number of QR code
        type: String,
        required: true
    },
    body: { //optional for admin to add content here - could be praise/encouragement or another hint
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('QR', QrSchema);*/
