'use strict';
module.exports = (sequelize, DataTypes) => {
  const Option = sequelize.define(
    'Option',
    {
      option: DataTypes.TEXT,
      correct: DataTypes.BOOLEAN,
      questionId: DataTypes.INTEGER,
    },
    {}
  );
  Option.associate = function(models) {
    Option.belongsTo(models.Question);
  };
  return Option;
};
