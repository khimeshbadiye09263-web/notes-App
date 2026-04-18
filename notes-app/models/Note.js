const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", noteSchema); // mongoose.model is used to create a model based on the defined schema. The first argument is the singular name of the collection that will be created in the database (Mongoose automatically looks for the plural, lowercased version of your model name). The second argument is the schema to use for this model.
