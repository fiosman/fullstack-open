const express = require("express");
const blogRouter = express.Router();

blogRouter.get("/", (req, res) => {});
blogRouter.post("/", (req, res) => {});
blogRouter.delete("/:id", (req, res) => {});

module.exports = blogRouter;
