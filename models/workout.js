const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date
    },
    exercises: [
        {
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
        }
    ]
});

const workout = mongoose.model("exercises", workoutSchema);

module.exports = workout;