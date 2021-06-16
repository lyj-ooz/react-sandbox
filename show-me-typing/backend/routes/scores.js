const router = require("express").Router();
const Scores = require("../models/Scores");

//add("POST") a score
router.post("/", async (req, res) => {
  const newScores = new Scores(req.body);
  try {
    const savedScore = await newScores.save();
    res.status(200).json(savedScore);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get("GET") all scores
router.get("/", async (req, res) => {
  try {
    const scores = await Scores.find(); // find 'all'
    res.status(200).json(scores);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
