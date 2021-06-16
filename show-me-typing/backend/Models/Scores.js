const mongoose = require("mongoose");

const ScoresSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    score: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Scores", ScoresSchema);
