const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());

//Route imports
const flat = require("./routes/flatRoute");
const flatmate = require("./routes/flatmateRoute");
const user = require("./routes/userRoute");
const payment = require("./routes/paymentRoute");


app.use("/api/v1",flat);
app.use("/api/v1",flatmate);
app.use("/api/v1",user);
app.use("/api/v1",payment);


app.use(errorMiddleware);


module.exports = app;