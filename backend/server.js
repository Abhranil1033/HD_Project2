const app = require("./app");

const dotenv = require("dotenv");
// require('dotenv').config();
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

//Config
dotenv.config({path:"backend/config/config.env"});

//Connect Database
connectDatabase();

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET,
})

// const port = 5000;
const server = app.listen(5001,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})


// Unhandled Promise Rejection (here,we have to make the server crash on its own due to some unhandled errors)
// process.on("unhandledRejection",err=>{
//     console.log(`Error: ${err.message}`);
//     console.log(`Shutting down the server due to unhandled promise rejection`);

//     //closing the server
//     server.close(() => {
//         process.exit(1);
//     })
// })