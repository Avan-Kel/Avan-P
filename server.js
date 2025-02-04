const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
// for logging errors
require("dotenv").config();

let fetchPostRoute = require("./routes/fetch-posts");
let getUserRoute = require("./routes/get-users");
let formPoster = require("./routes/form-poster");

let server = express();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
server.use(cors(corsOptions));
server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

// Route code starts here
server.use("/fetch-posts", fetchPostRoute);
server.use("/get-users", getUserRoute);
server.use("/form-poster", formPoster);

let serverPort = 3004;
server.listen(serverPort, () => {
    console.log("App is running on port " + serverPort );
})


