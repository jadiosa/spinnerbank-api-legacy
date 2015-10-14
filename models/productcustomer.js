'use strict';
module.exports = function(sequelize, DataTypes) {
  var ProductCustomer = sequelize.define('ProductCustomer', {
    balance: DataTypes.DECIMAL(10, 2)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ProductCustomer;
};