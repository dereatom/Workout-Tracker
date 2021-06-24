const mongoose = require("mongoose");
const { Workout } = require(".");

const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    day: {
        type: "Date",
        default: Date.now
    },
    exercises: [{
        type: {
            type:String,
            trim: true,
            required: 'Enter the type of exercise'
        },

        name: {
            type: String,
            trim: true,
            required: 'type of exercises'
        },

        duration: {
            type: Number
        },

        reps: {
            type: Number
        },

        Sets: {
            type: Number
        },

        distances: {
            type: Number
        }
    }]
  });
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;