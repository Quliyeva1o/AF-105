const ReportModel = require("../models/report.model");

const report_controller = {
  getAll: async (req, res) => {
    const reports = await ReportModel.find();

    try {
        if (reports.length > 0) {
            res.status(200).send({
              message: "success",
              data: reports,
            });
          } else {
            res.send({
              message: "not found",
              data: null,
            });
          }
    } catch (error) {
        res.send({
            message: error,
            error: true
        })
    }
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    let report;
    try {
        report = await ReportModel.findById(id);
    } catch (error) {
      res.send({ error: error });
    }
    if (report) {
      res.status(200).send({
        message: "success",
        data: report,
      });
    } else {
      res.send({
        message: "no content",
        data: null,
      });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    let response;
    try {
      response = await ReportModel.findByIdAndDelete(id);
    } catch (error) {
      res.send({
        error: error,
      });
    }
    res.send({
      message: "deleted",
      response: response,
    });
  },
  post: async (req, res) => {
    const report = new ReportModel(req.body);
    await report.save();
    res.send({
      message: "posted",
      data: report,
    });
  },
};

module.exports = report_controller;
