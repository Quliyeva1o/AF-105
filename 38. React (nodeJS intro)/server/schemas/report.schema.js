const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    reportId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    reportedId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    reason: {
      type: String,
    },
    comment: String,
  },
  { timestamps: true }
);

module.exports = reportSchema;
