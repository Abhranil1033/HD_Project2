const app = require("./app");

// const dotenv = require("dotenv");
require('dotenv').config();
const connectDatabase = require("./config/database");

//Config
// dotenv.config({path:"backend/config/config.env"});

//Connect Database
connectDatabase();

const port = process.env.PORT || 5000;
const server = app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
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