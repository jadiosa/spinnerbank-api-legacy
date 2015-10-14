'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Customers', [{
      fullName: 'John Doe',
      documentType: 'cc',
      documentNumber: '1091671160',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Customers', null, {});

  }
};
