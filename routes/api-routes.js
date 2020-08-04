const db = require("../models");

module.exports = function(app) {
    //get all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
    });
    //update workout
    app.put("/api/workouts/:id", (req, res) => {

    });
    //add new workout
    app.post("/api/workouts", (req, res) => {

    });
    //get workouts in range
    app.get("/api/workouts/range", (req, res) => {

    });
};