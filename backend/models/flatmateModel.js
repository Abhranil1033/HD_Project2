const mongoose = require("mongoose");

const flatmateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    proffession: {
        type: String,
        required: true
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type : mongoose.Schema.ObjectId,
                ref : "User",
                required : true,
            },
            name:{
                type:String,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],

})

module.exports = mongoose.model("Flatmate",flatmateSchema);