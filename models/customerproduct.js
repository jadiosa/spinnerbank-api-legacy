'use strict';
module.exports = function(sequelize, DataTypes) {
  var CustomerProduct = sequelize.define('CustomerProduct', {
    balance: DataTypes.DECIMAL(10, 2)
  }, {
    classMethods: {

      associate: function(models) {
        CustomerProduct.hasMany(models.Transaction);
      }
    }
  });
  return CustomerProduct;
};