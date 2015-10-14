'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    productType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Product.belongsToMany(models.Customer, { through: 'CustomerProduct' });
      }
    }
  });
  return Product;
};