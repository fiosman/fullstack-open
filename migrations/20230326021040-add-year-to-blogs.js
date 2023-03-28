"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("blogs", "year", {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1991,
      validate: {
        min: {
          args: 1991,
          msg: "Must be greater than or equal to 1991",
        },
        max: {
          args: new Date().getFullYear(),
          msg: "Cannot exceed current date",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("blogs", "year");
  },
};
