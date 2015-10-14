'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    ProductType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Product.hasMany(models.ProductCustomer);
      }
    }
  });
  return Product;
};