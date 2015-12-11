var mongoose = require('mongoose');
var async = require('async');

var Product  = mongoose.model('Product');
var Customer  = mongoose.model('Customer');
var Transaction  = mongoose.model('Transaction');

exports.findAllCustomerProducts = function(req, res) {
  Customer.findOne({email: req.params.email}, function(err, customer){
    if(err) res.status(500).send(err.message);
    
    if(customer === null){
      console.log('Customer not found');
      res.status(404).jsonp({error: 'Customer not found'});
    }
    else {
      Product.find({_id: customer.products}, function(err, products){
        if(err) res.status(500).send(err.message);
        
        async.map(products, function(product, callback) {
          setProductBalances(product, customer, callback);
        },function(err, productsJson){
            if( err ) {
              res.status(500).send(err.message);
            } else {
              var customerProductsJson = {
                _id:        customer.id,
                name:       customer.name,
                lastName:   customer.lastName,
                cellNumber: customer.cellNumber,
                products:   productsJson
              };

              console.log('GET api/v1/customers/' + customer.email + '/products');
              res.status(200).jsonp(customerProductsJson);
            }
          });
      }); 
    }
  });
};

function setProductBalances(product, customer, callback) {
  var productsJson = [];
  Transaction.findOne({idProduct: product.id, idCustomer: customer.id}, {}, { sort: { 'createdAt' : -1 } }, function(err, transaction) {
    if(err) return callback(err);
    
    var balance = 0;
    if(transaction !== null){
      balance = transaction.balance;
    }
    
    var productJson = {
      _id:          product.id,
      name:         product.name,
      productType:  product.productType,
      balance:      balance
    };
    
    productsJson.push(productJson);
    
    callback(null, productsJson);
  });
}