const express = require("express");
const authUser = require("../middleware/auth.middleware");
const { generateInterviewReportController } = require("../controllers/interview.controller");
const upload = require("../middleware/file.middleware");

const interviewRouter = express.Router();

interviewRouter("/", authUser, upload.single("resume"), generateInterviewReportController);



module.exports = interviewRouter