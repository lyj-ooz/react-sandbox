const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const scoresRoute = require("./routes/scores");
const wordsRoute = require("./routes/words");

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("mongo db connected!");
  })
  .catch((err) => console.log(err));

app.use("/api/scores", scoresRoute);
app.use("/api/words", wordsRoute);

app.get("/", (req, res) => {
  res.send("Welcome to 'show me your typing' API 🎉");
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log("backend server is running...");
});
