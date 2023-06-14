const mongoose = require("mongoose");

const flatSchema = mongoose.Schema({
    city:{
        type:String,
        required : [true,"Enter your city"],
    },
    description:[
        {
            rooms:{
                type : Number,
                required : true
            },
            maxPeople:{
                type : Number,
                required: true
            }
        }
    ],
    rent:{
        type : Number,
        required : true
    },
    ratings: {
        type: Number,
        default : 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ]
})

module.exports = mongoose.model("Flat",flatSchema);