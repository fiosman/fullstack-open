const express = require("express");
const blogRouter = require("./routes/blog-routes");
const readingListRouter = require("./routes/readinglist-routes");
const userRouter = require("./routes/user-routes");
const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/blogs", blogRouter);
app.use("/api/users", userRouter);
app.use("/api/readinglists", readingListRouter);

app.listen(port, () => {
  console.log(`Server started and listening on port ${port}`);
});
