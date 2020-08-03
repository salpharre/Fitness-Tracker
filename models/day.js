const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//creating an object containing day and association with exercises model
const daySchema = new Schema({
    day: {
        type: Date
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "exercises"
        }
    ]
    
});

const day = mongoose.model("day", daySchema);

module.exports = day;