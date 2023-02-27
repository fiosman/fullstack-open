const express = require("express");
const userRouter = express.Router();
const UserController = require("../controllers/UserController");

userRouter.get("/", UserController.getAllUsers);

module.exports = userRouter;
