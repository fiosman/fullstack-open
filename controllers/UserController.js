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
    const createdUser = await UserService.createUser(name, username);
    res.json(createdUser);
  } catch (err) {
    throw err;
  }
};

const editUsername = async (req, res, next) => {
  try {
    const { username } = req.params;
    const { newUserData } = req.body;
    const editedUser = await UserService.editUsername(username, newUserData);
    res.json(editedUser);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllUsers,
  createUser,
  editUsername,
};
