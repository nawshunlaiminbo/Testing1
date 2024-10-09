"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("exams", [
      {
        name: "first exam",
        subjectId: 1,
        startDate: "11/2/2020",
        endDate: "20/2/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "second exam",
        subjectId: 1,
        startDate: "11/2/2020",
        endDate: "20/2/2020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "third exam",
        subjectId: 1,
        startDate: "11/2/2020",
        endDate: "20/2/2020",
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
