const express = require("express");
const userRouter = express.Router();
const UserController = require("../controllers/UserController");

userRouter.get("/", UserController.getAllUsers);
userRouter.post("/", UserController.createUser);
userRouter.put("/:username", UserController.editUsername);

module.exports = userRouter;
