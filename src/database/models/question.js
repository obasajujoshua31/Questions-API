'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    'Question',
    {
      question: DataTypes.TEXT,
      source: DataTypes.STRING,
      topicId: DataTypes.INTEGER,
    },
    {}
  );
  Question.associate = function(models) {
    Question.belongsTo(models.Topic);
    Question.hasMany(models.Option);
  };
  return Question;
};
