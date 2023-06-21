const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const mongoose = require("mongoose");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

//Route imports
const flat = require("./routes/flatRoute");
const flatmate = require("./routes/flatmateRoute");
const user = require("./routes/userRoute");


app.use("/api/v1",flat);
app.use("/api/v1",flatmate);
app.use("/api/v1",user);


app.use(errorMiddleware);


module.exports = app;