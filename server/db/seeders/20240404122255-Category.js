/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Категория 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Категория 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Категория 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Категория 4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Категория 5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
