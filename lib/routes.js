var api = require('./api');

module.exports = [
  {
    method: 'GET',
    path: '/api/v1/customers/{customerId}/products',
    handler: api.products.index
  }
];