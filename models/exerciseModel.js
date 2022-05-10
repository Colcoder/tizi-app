
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
      exerciseName: {
          type: String,
          required: true
        },
      Duration: {
          type: Number,
          required: true
        },
      date: {
          type: Date,
          required: true
        },
      description:{
          type: String,
          required: true
        },
      venue: {
         type: String,
         required: true
      }
    },
    {
        timestamps: true
    }
)

const Exercise = mongoose.model("Exercise",exerciseSchema);

module.exports = Exercise;

