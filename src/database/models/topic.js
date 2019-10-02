'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define(
    'Topic',
    {
      title: DataTypes.STRING,
      subjectId: DataTypes.INTEGER,
    },
    {}
  );
  Topic.associate = function(models) {
    Topic.belongsTo(models.Subject);
    Topic.hasMany(models.Question);
  };
  return Topic;
};
