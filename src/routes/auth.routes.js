const express = require("express");
const userModel = require("../models/user.model");
const { registerController, loginController } = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/register",registerController)
authRouter.post("/login",loginController)

module.exports = authRouter;
