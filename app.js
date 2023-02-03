const express = require("express");
const blogRouter = require("./routes/blog-routes");
const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/blogs", blogRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
