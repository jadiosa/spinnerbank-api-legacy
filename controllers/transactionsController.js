var mongoose = require('mongoose');

var Product  = mongoose.model('Product');
var Customer  = mongoose.model('Customer');
var Transaction  = mongoose.model('Transaction');

exports.findAllCustomerProductTransactions = function(req, res) {
  Customer.findOne({email: req.params.email}, function(err, customer){
    if(err) res.status(500).send(err.message);
    
    if(customer === null){
      console.log('Customer not found');
      res.status(404).jsonp({error: 'Customer not found'});
    }
    else {
      if(mongoose.Types.ObjectId.isValid(req.params.idProduct)){
        Product.findById(req.params.idProduct, function(err, product){
          if(err) res.status(500).send(err.message);

          if(product === null){
            console.log('Product not found');
            res.status(404).jsonp({error: 'Product not found'});
          }
          else {
            setCustomerProductTransactions(product, customer, res);
          }
        });
      }else{
        console.log('Product Id invalid');
        res.status(404).jsonp({error: 'Product Id invalid'});
      }
    }
  });
};

function setCustomerProductTransactions(product, customer, res) {
  Transaction.find({idProduct: product.id, idCustomer: customer.id}, function(err, transactions){
    if(err) res.status(500).send(err.message);

    var customerProductTransactionsJson = {
      _id:        customer.id,
      name:       customer.name,
      lastName:   customer.lastName,
      cellNumber: customer.cellNumber,
      product:    {
                    _id:            product.id,
                    name:           product.name,
                    productType:    product.productType,
                    transactions:   transactions
                  }
    };

    console.log('GET api/v1/customers/' + customer.email + '/products/' + product.id + '/transactions');
    res.status(200).jsonp(customerProductTransactionsJson);
  });
}