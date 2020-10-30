const mongoose = require("mongoose");
const nanoid = require("nanoid");

const urlModelSchema = mongoose.Schema({
  url: String,
  slug: {
    type: String,
    index: true,
    default: nanoid()
  }
});

module.exports = mongoose.model("urlModel", urlModelSchema);
