'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Topics', 'subjectId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Subjects',
        key: 'id',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Topics', 'subjectId');
  },
};
