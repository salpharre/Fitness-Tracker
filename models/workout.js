const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
{
    day: {
        type: Date
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Choose a workout type"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter name of workout"
            },
            duration: {
                type: Number,
                trim: true,
                required: "Enter a time in minutes"
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
},
    {
    toJSON: {
        //allows virtual data, totalDuration to display when Schema is called
        virtuals: true
    }
});
//creates virtual data, totalDuration from other document properties in Schema, specifically from the duration property in exercises
workoutSchema.virtual("totalDuration").get(function() {
    //reduces array of exercises to a single value, the sum of the duration values
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("exercises", workoutSchema);

module.exports = Workout;