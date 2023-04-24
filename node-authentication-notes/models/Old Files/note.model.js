const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    Qrindex: { //specific QR code found
        type: String,
        required: true
    },
    Qr_id: { //this is the unique _id automatically generated at time of QR code creation
        type: String,
        required: true
    },
    teamname: { //ties the find to the finding team
        type: String
    } // need an automatic process to add flags to track finds  -still working
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
