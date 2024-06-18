const mongoose = require("mongoose");
const reportSchema = require('../schemas/report.schema');

const ReportModel = mongoose.model("Reports", reportSchema);

module.exports = ReportModel;