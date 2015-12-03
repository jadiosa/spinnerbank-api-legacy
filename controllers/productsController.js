var mongoose = require('mongoose');  
var Product  = mongoose.model('Product');
var Customer  = mongoose.model('Customer');
var Transaction  = mongoose.model('Transaction');

exports.findAllCustomerProducts = function(req, res) {
  Customer.findOne({email: req.params.email}, function(err, customer){
    if(err) res.send(500, err.message);
    
    if(customer === null){
      console.log('Customer not found');
      res.status(404).jsonp({error: 'Customer not found'});
    }
    else {
      Product.find({_id: customer.products}, function(err, products){
        if(err) res.send(500, err.message);
        
        Transaction.findOne({}, {}, { sort: { 'createdAt' : -1 } }, function(err, transaction) {
          if(err) res.send(500, err.message);
          
          var balance = 0;
          if(transaction !== null){
            balance = transaction.balance;
          }
          
          var customerProductsJson = {
            _id:        customer.id,
            name:       customer.name,
            lastName:   customer.lastName,
            balance:    balance,
            products:   products
          }
          
          console.log('GET /customers/' + customer.email + '/products');
          res.status(200).jsonp(customerProductsJson);
        });
      }); 
    }
  });
};