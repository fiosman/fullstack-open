const express = require("express");
const authorRouter = express.Router();

authorRouter.get("/", AuthorController.getAuthors);

module.exports = authorRouter;
