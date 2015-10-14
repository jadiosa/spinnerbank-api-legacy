'use strict';

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    fullName: DataTypes.STRING,
    documentType: DataTypes.STRING,
    documentNumber: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Customer.hasMany(models.CustomerProduct, { as: 'products' });
      }
    }
  });
  return Customer;
};