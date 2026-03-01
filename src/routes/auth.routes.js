const express = require("express");
const userModel = require("../models/user.model");
const { registerController, loginController, logoutController } = require("../controllers/auth.controller");
const authRouter = express.Router();

authRouter.post("/register",registerController)
authRouter.post("/login",loginController)
authRouter.get("/logout",logoutController)

module.exports = authRouter;
