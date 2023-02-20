const express = require("express");
const blogRouter = express.Router();
const BlogController = require("../controllers/BlogController");

blogRouter.get("/", BlogController.getAllBlogs);
blogRouter.post("/", BlogController.createBlog);
blogRouter.delete("/:id", BlogController.deleteBlog);
blogRouter.put("/:id", BlogController.updateBlog);

module.exports = blogRouter;
