const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    src: String,
    //one to many relation
    journalistId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    //many to many relation
    tagIds: Array,
    likes: { type: Array, default: [] },
    comments: { type: Array, default: [] },
  },
  { timestamps: true }
);

module.exports = blogSchema;
