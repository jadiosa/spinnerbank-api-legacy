var Hapi = require('hapi');
var models = require('./models');

// Create the server
var server = new Hapi.Server();
server.connection({ port : process.env.PORT || 3000 })

server.route({
  method: 'GET',
  path: '/api/v1',
  handler: function(request, reply) {
    reply({ 'api' : 'hello!' });
  }
});

models.sequelize.sync().then(function() {
  server.start(function() {
    console.log('Running on 3000');
  });
});