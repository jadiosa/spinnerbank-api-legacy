var mongoose = require('mongoose');  
var Product  = mongoose.model('Product');
var User  = mongoose.model('User');
var Transaction  = mongoose.model('Transaction');

exports.findAllUserProducts = function(req, res) {
  var documentType = req.params.userID.split('-')[0];
  var documentNumber = parseInt(req.params.userID.split('-')[1]);

  User.findOne({documentType: documentType, documentNumber: documentNumber}, function(err, user){
    if(err) res.send(500, err.message);
    
    if(user === null){
      console.log('User not found');
      res.status(404).jsonp({error: 'User not found'});
    }
    else {
      Product.find({_id: user.products}, function(err, products){
        if(err) res.send(500, err.message);
        
        Transaction.findOne({}, {}, { sort: { 'createdAt' : -1 } }, function(err, transaction) {
          if(err) res.send(500, err.message);
          
          var balance = 0;
          if(transaction !== null){
            balance = transaction.balance;
          }
          
          var userProductsJson = {
            _id:        user.id,
            name:       user.name,
            lastName:   user.lastName,
            balance:    balance,
            products:   products
          }
          
          console.log('GET /users/' +user.documentType+'-'+user.documentNumber+ '/products');
          res.status(200).jsonp(userProductsJson);
        });
      }); 
    }
  });
};