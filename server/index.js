const express = require("express");
const morgan = require("morgan");
const urlController = require("./controllers/urlController");
const mongoose = require("mongoose");

const app = express();

const connectionStr = process.env.MONGO_URI;

mongoose.connect(connectionStr);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.json());
app.use(morgan("tiny"));

app.post("/", urlController.createUrl(req, res));

app.get("/:id", urlController.redirectUrl(req, res));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});
