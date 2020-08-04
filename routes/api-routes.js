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
     //get workouts in range
     app.get("/api/workouts/range", (req, res) => {
        //for stats html
    });
    //get last workout by id
    app.get("/api/workouts/:id", (req, res) => {
        //to work with 'continue workout' button on index html
    });
    //update workout
    app.put("/api/workouts/:id", (req, res) => {
        //exercise.js --> findOneAndUpdate
    });
    //add new workout
    app.post("/api/workouts", (req, res) => {
        //exercise.js
    });
};