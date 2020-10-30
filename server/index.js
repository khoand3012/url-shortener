const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routers/router");

const app = express();

const connectionStr = process.env.MONGO_URI;

mongoose
  .connect(connectionStr, { useNewUrlParser: true })
  .then(() => {
    app.use(express.json());
    app.use(morgan("tiny"));

    app.use(routes);

    const port = process.env.PORT || 8080;

    app.listen(port, () => {
      console.log(`App running on port ${port}!`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
