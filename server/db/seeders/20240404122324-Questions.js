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
        title: 'Что выведет следующий код? \n let name = "Вася"; \n function sayHi() \n { alert(name); } \n setTimeout(function() { \n let name = "Петя"; \n sayHi(); }, 1000);',
        answer: 'Вася',
      },
      {
        title: 'Что выведет следующий код? \n var output = (function(x) { \n delete x; \n return x; \n })(0);',
        answer: '0',
      },
    ].map((el, i) => ({ ...el, cost_id: i + 1, category_id: 1 }));
    const category2 = [
      {
        title: 'Как звали главного героя в аниме "Клинок Рассикающий Демонов?"',
        answer: 'Камадо Танджиро',
        img: 'https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/d/dd/Tanjiro_Kamado_Full_Body_%28Anime%29.png/revision/latest?cb=20230117090856'
      },
      {
        title: 'Угадай аниме по главному герою',
        answer: 'Тетрадь смерти',
        img: 'https://static.wikia.nocookie.net/deathnote/images/5/54/Light_YagamiHD.jpg/revision/latest?cb=20210131141716&path-prefix=ru'
      },
      {
        title: 'Кто из нашей команды никогда не смотрел аниме?',
        answer: 'Мансур',
        img: 'https://www.gtrk-vyatka.ru/uploads/posts/2023-03/1677670801_2023-03-01_14-39-08.jpg'
      },
      {
        title: 'Как на самом деле называется аниме "Атака титанов"?',
        answer: 'Атака на титанов',
        img: 'https://sun9-66.userapi.com/impg/IVSUH6SkyKve1YJwub6m8GN3B6VHZhEIoHx24A/7lGkdDzHS08.jpg?size=1280x716&quality=96&sign=003912f8ee6d29af5fd217506c11f920&type=album'
      },
      {
        title: 'Сколько всего кланов в аниме "Наруто"?',
        answer: '49',
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/3473288/pub_5efb18939e24bb6d6fa36f62_5efb29bb045dea3efca80ece/scale_1200'
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