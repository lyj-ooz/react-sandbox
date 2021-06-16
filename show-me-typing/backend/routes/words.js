const router = require("express").Router();
const Words = require("../models/Words");

//add("POST") a word
router.post("/", async (req, res) => {
  const newWords = new Words(req.body);
  try {
    const savedWord = await newWords.save();
    res.status(200).json(savedWord);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get("GET") all words
router.get("/", async (req, res) => {
  try {
    const words = await Words.find({}, { word: 1, _id: 0 });
    res.status(200).json(words);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
