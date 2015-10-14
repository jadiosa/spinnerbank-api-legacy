'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Products', [{
      name: 'CDT',
      productType: 'Preferencial',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
   
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Products', null, {});

  }
};
