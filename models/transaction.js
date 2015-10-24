'use strict';
module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define('Transaction', {
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    value: DataTypes.DECIMAL(10,2)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Transaction;
};