//Requires mongoose for creating the schema
const mongoose = require("mongoose");
//creates new schema using mongoose to set up the collection and document in mongodb
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now()
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
                distance: {
                    type: Number,
                    trim: true,
                    required: "Enter a distance in miles"
                },
                weight: {
                    type: Number,
                    trim: true,
                    required: "Enter a weight in lbs"
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
workoutSchema.virtual("totalDuration").get(function () {
    //reduces array of exercises to a single value, the sum of the duration values
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
//collection is exported
const Workout = mongoose.model("exercises", workoutSchema);

module.exports = Workout;