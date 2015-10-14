var models = require('../models');

exports.products = {
  index: function(request, reply) {
    models.Customer.findById(request.params.customerId)
      .then(function(customer) {
        if(customer != undefined){
          customer.getProducts().then(function(products) {
            reply(products).code(200);
          });
        }else{
          reply({statusCode: 404, error: 'Customer not found'}).code(404)
        }
      });
  }
};