'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('CustomerProducts', [{
      balance: 100,
      CustomerId: 1,
      ProductId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('CustomerProducts', null, {});

  }
};
