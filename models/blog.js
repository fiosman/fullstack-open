"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blog.init(
    {
      author: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
