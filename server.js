//Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
//Port
const PORT = process.env.PORT || 3000;
//Models so routes work
const db = require("./models");
//for morgan dependency so status codes are logged when server is running
app.use(logger("dev"));
//For parsing data through express
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Allows js and css to be used in html
app.use(express.static("public"));
//Connects to mongodb using an env variable or localhost
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {useNewUrlParser: true, useFindAndModify: false});
//Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//Starts the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });