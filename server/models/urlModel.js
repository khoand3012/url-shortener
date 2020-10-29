const mongoose, { Schema } = require("mongoose");

const urlModelSchema = new Schema({
  url: String,
  slug: {
    type: String,
    index: true
  }
});

const urlModel = mongoose.model("urlModel", urlModelSchema);

export default urlModel;