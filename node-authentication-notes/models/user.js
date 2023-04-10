const mongoose = require('mongoose')

const model = mongoose.Schema({
    teamname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = new mongoose.model("User", model)