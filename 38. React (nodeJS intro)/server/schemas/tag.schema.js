const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    title: String,
    blogIds: Array,
  },
  { timestamps: true, versionKey: false }
);

module.exports = tagSchema;
