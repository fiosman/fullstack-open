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

const editUsername = async (username, newUserData) => {
  try {
    const updatedUser = await User.update(
      { username: newUserData.username },
      {
        where: {
          username: username,
        },
      }
    );
    return updatedUser;
  } catch (err) {
    throw err;
  }
};

const getUserById = async (userId) => {
  try {
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllUsers,
  createUser,
  editUsername,
  getUserById,
};
