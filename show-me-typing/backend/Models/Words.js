const mongoose = require("mongoose");

const WordsSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Words", WordsSchema);
