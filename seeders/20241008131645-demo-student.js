"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("students", [
      {
        name: "Shoon Lae ",
        email: "shoonlae@gmail.com",
        address: "yangon",
        phonenumber: "65687464",
        gender: "female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hsu Aung ",
        email: "hsuaung@gmail.com",
        address: "yangon",
        phonenumber: "657461321",
        gender: "female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shun Shun",
        email: "shunshun@gmail.com",
        address: "yangon",
        phonenumber: "54764566",
        gender: "female",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
