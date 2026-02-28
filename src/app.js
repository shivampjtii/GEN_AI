const express = require("express");
const app = express();
app.use(express.json());

// all routes are required here
const authRouter = require("./routes/auth.routes.js");

// Use all the routes here
app.use("/api/auth",authRouter);


module.exports = app;
