const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGOB_URI || "mongodb://localhost/workout", {useNewUrlParser: true, useFindAndModify: false});

require("./routes/api-routes.js")(app);

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });