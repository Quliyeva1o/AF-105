const express = require("express");
const report_router = express.Router();
const controller = require("../controllers/index");
const authenticateToken = require("../middlewares/authenticate_token");

report_router.get("/api/reports", authenticateToken, controller.report.getAll);
report_router.get("/api/reports/:id", authenticateToken, controller.report.getOne);
report_router.delete("/api/reports/:id", controller.report.delete);
report_router.post("/api/reports", controller.report.post);

module.exports = report_router;
