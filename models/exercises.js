const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    type: {
        type: String
    },
    name: {
        type: String
    },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    }
});

const exercises = mongoose.model("exercises", exercisesSchema);

module.exports = exercises;