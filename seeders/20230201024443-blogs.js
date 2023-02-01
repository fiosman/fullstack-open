"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("blogs", [
      {
        author: "Fares",
        url: "www.google.com",
        title: "The best way to live",
      },
      {
        author: "Chris",
        url: "www.youtube.com",
        title: "The worst way to live",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
