const express = require("express");
const authUser = require("../middleware/auth.middleware");
const interviewController = require("../controllers/interview.controller");

const interviewRouter = express.Router();

interviewRouter("/", authUser, interviewController.generateInterviewReportController);



module.exports = interviewRouter