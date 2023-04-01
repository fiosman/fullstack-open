const express = require("express");
const readingListRouter = express.Router();
const ReadingListController = require("../controllers/ReadingListController");

readingListRouter.post("/", ReadingListController.addBlogToReadingList);

module.exports = readingListRouter;
