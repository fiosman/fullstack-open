const User = require("../models").user;

const getAllUsers = async () => {
  try {
    const allUsers = await User.findAll();
    return allUsers;
  } catch (err) {
    throw err;
  }
};

const createUser = async (name, username) => {
  try {
    const createdUser = await User.create({ name, username });
    return createdUser;
  } catch (err) {
    throw err;
  }
};

const editUsername = async (username) => {
  try {
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllUsers,
  createUser,
  editUsername,
};
