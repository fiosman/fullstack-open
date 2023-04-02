const ReadingListService = require("../services/ReadingListService");

const addBlogToReadingList = async (req, res, next) => {
  const { blogId, userId } = req.body;
  try {
    const list = await ReadingListService.addBlogToReadingList(blogId, userId);
    res.json(list);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addBlogToReadingList,
};
