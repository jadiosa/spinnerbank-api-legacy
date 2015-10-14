var Hapi = require('hapi');
var models = require('./models');

// Create the server
var server = new Hapi.Server();
server.connection({ port : process.env.PORT || 3000 })

// Routes
server.route(require('./lib/routes'));

models.sequelize.sync().then(function() {
  server.start(function() {
    console.log('Running on 3000');
  });
});