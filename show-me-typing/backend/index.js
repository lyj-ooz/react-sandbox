const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const scoresRoute = require("./routes/scores");
const wordsRoute = require("./routes/words");

dotenv.config();

app.use(express.json());

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

app.listen(8888, () => {
  console.log("backend server is running...");
});
