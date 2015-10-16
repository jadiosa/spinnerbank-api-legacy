'use strict';
module.exports = function(sequelize, DataTypes) {
  var Transactions = sequelize.define('Transactions', {
    date: DataTypes.DATE,
    description: STRING,
    value: DataTypes.DECIMAL(10, 2)
  },  {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Customer;
};