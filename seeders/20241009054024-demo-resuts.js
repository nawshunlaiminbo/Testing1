"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("results", [
      {
        studentId: 1,
        subjectId: 1,
        marks: "88",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 2,
        subjectId: 1,
        marks: "88",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 3,
        subjectId: 1,
        marks: "88",
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
