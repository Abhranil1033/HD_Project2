const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true,"Please enter your name"],
        minLength :[3,"Name should be more than 3 characters"]
    },
    email : {
        type : String,
        required : [true,"Please enter your email"],
        unique : true
    },
    password:{
        type : String,
        required : [true, "Please enter your password"],
        minLength : [8,"Password should be atleast 8 characters"],
        select : false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: "user"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})