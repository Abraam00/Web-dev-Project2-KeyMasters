const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
