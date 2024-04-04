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

    const category1 = [
      {
        title: 'Что нужно сделать для того чтобы понять Рекурсию?',
        answer: 'Понять рекурсию',
      },
      {
        title: 'Транслит слова - ПШЕ?',
        answer: 'git',
      },
      {
        title: 'Какой тип данных у значения NULL?',
        answer: 'object',
      },
      {
        title: 'let name = "Вася"; \n function sayHi() \n { alert(name); } \n setTimeout(function() { \n let name = "Петя"; \n sayHi(); }, 1000);',
        answer: 'Вася',
      },
      {
        title: 'Что выведет следующий код? var output = (function(x) { \n delete x; \n return x; \n })(0);',
        answer: '0',
      },
    ].map((el, i) => ({ ...el, cost_id: i + 1, category_id: 1 }));
    const category2 = [
      {
        title: 'Вопрос 1',
        answer: 'Ответ 1',
      },
      {
        title: 'Вопрос 2',
        answer: 'Ответ 2',
      },
      {
        title: 'Вопрос 3',
        answer: 'Ответ 3',
      },
      {
        title: 'Вопрос 4',
        answer: 'Ответ 4',
      },
      {
        title: 'Вопрос 5',
        answer: 'Ответ 5',
      },
    ].map((el, i) => ({ ...el, cost_id: i + 1, category_id: 2 }));
    const category3 = [
      {
        title: 'Вопрос 1',
        answer: 'Ответ 1',
      },
      {
        title: 'Вопрос 2',
        answer: 'Ответ 2',
      },
      {
        title: 'Вопрос 3',
        answer: 'Ответ 3',
      },
      {
        title: 'Вопрос 4',
        answer: 'Ответ 4',
      },
      {
        title: 'Вопрос 5',
        answer: 'Ответ 5',
      },
    ].map((el, i) => ({ ...el, cost_id: i + 1, category_id: 3 }));
    const category4 = [
      {
        title: 'Вопрос 1',
        answer: 'Ответ 1',
      },
      {
        title: 'Вопрос 2',
        answer: 'Ответ 2',
      },
      {
        title: 'Вопрос 3',
        answer: 'Ответ 3',
      },
      {
        title: 'Вопрос 4',
        answer: 'Ответ 4',
      },
      {
        title: 'Вопрос 5',
        answer: 'Ответ 5',
      },
    ].map((el, i) => ({ ...el, cost_id: i + 1, category_id: 4 }));
    const category5 = [
      {
        title: 'Вопрос 1',
        answer: 'Ответ 1',
      },
      {
        title: 'Вопрос 2',
        answer: 'Ответ 2',
      },
      {
        title: 'Вопрос 3',
        answer: 'Ответ 3',
      },
      {
        title: 'Вопрос 4',
        answer: 'Ответ 4',
      },
      {
        title: 'Вопрос 5',
        answer: 'Ответ 5',
      },
    ].map((el, i) => ({ ...el, cost_id: i + 1, category_id: 5 }));

    await queryInterface.bulkInsert('Questions', [
      ...category1,
      ...category2,
      ...category3,
      ...category4,
      ...category5,
    ].map((el) => ({
      ...el,
      createdAt: new Date(),
      updatedAt: new Date(),
    })), {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
