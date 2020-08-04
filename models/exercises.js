const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: [true, "Please choose a workout type"]
    },
    name: {
        type: String,
        trim: true,
        required: "Enter name of workout"
    },
    duration: {
        type: Number,
        trim: true,
    },
    weight: {
        type: Number,
        trim: true,
    },
    reps: {
        type: Number,
        trim: true,
    },
    reps: {
        type: Number,
        trim: true,
    },
    sets: {
        type: Number,
        trim: true,
    }
});

const exercises = mongoose.model("exercises", exercisesSchema);

module.exports = exercises;