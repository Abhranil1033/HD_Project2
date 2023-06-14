const mongoose = require("mongoose");

const flatmateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    proffession: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Flatmate",flatmateSchema);