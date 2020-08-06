//Require path module for rendering html files
const path = require("path");

module.exports = function(app) {
    //path for index html
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    //path to exercise html
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });
    //path to stats html
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
};