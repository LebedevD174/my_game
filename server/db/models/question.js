const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, Cost }) {
      // define association here
      this.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });
      this.belongsTo(Cost, { foreignKey: 'cost_id', as: 'cost' });
    }
  }
  Question.init({
    title: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    cost_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
