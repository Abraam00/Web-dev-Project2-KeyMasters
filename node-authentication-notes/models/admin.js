const mongoose = require('mongoose')

const model = mongoose.Schema({
    adminname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = new mongoose.model("User", model)