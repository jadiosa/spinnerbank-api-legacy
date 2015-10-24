'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Transactions', [{
      date: new Date(),
      description: 'Compra de comida',
      values: 500,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Transactions', null, {});

  }
};