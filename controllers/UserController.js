const UserService = require("../services/UserService");

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await UserService.getAllUsers();
    res.json(allUsers);
  } catch (err) {
    throw err;
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, username } = req.body;
    const allUsers = await UserService.createUser(name, username);
    res.json(allUsers);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
