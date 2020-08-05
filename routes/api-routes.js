const db = require("../models");

module.exports = function(app) {
    //get all workouts, works with index html
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
    });
     //get workouts' range, to render data for stats html
     app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        })
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