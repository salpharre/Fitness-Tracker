const db = require("../models");

module.exports = function(app) {
    //Get last workout, works with index html
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
    });
     //Get workouts' range, to render data for stats html
     //Limits number of workouts to 7
     app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        })
    });
    //Post route to create new empty workout document
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({}).then(data => {
            res.json(data);
        }).catch(err => {
            res.json(err);
        });
    });
    //Update and existing workout document and adding exercises to exercises array
    //Deconstructs req into an object containing the incoming data(body), and the id(params) used to make the call
    app.put("/api/workouts/:id", ({body, params}, res) => {
        db.Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true }).then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
    });
};