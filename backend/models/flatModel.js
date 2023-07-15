const mongoose = require("mongoose");

const flatSchema = mongoose.Schema({
    city:{
        type:String,
        required : [true,"Enter your city"],
        trim: true
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
    ],
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
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
})

module.exports = mongoose.model("Flat",flatSchema);