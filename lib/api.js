var models = require('../models');

exports.products = {
  index: function(request, reply) {
    models.Customer.findById(request.params.customerId)
      .then(function(customer) {
        customer.getProducts().then(function(products) {
          reply(products).code(200);
        });
      });
  }
};