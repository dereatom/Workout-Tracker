// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const workoutSchema = new Schema(
// {
//     day: {
//         type: "Date",
//         default: () => Date.now
//     },
//     exercises: [
//     {
//         type: {
//             type:String,
//             trim: true,
//             required: 'Enter an exercise type'
//         },

//         name: {
//             type: String,
//             trim: true,
//             required: 'Enter an exercise name'
//         },

//         duration: {
//             type: Number,
//             required: "Enter an exercise duration in minutes"
//         },

//         weight: {
//             type: Number
//         },

//         reps: {
//             type: Number
//         },

//         Sets: {
//             type: Number
//         },

//         distances: {
//             type: Number
//         }
//     }]
// });

//  // adds a dynamically-created property to schema
// workoutSchema.virtual("totalDuration").get(function () {
//     // "reduce" array of exercises down to just the sum of their durations
//     return this.exercises.reduce((total, exercise) => {
//       return total + exercise.duration;
//     }, 0);
//   });
  
// const Workout = mongoose.model("Workout", workoutSchema);

// module.exports = Workout;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    enum: ["resistance", "cardio"],
    required: "Valid options are 'resistance' or 'cardio'",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise",
  },
  duration: {
    type: Number,
    required: "Enter the duration minutes",
  },
  weight: {
    type: Number,
    required: isRequired("weight"),
  },
  reps: {
    type: Number,
    required: isRequired("reps"),
  },
  sets: {
    type: Number,
    required: isRequired("sets"),
  },
  distance: {
    type: Number,
    required: isRequired("distance"),
  },
});

function isRequired(field) {
  return function () {
    if (field == "distance") {
      return this.type === "cardio";
    } else {
      return this.type === "resistance";
    }
  };
}

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [exerciseSchema],
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  let totalDuration = 0;
  this.exercises.forEach((el) => {
    totalDuration += el.duration;
  });
  return totalDuration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;