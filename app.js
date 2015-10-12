var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    router      = express.Router(),
    models      = require("./models");

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', function(req, res) {
  res.send("Hello World!");
});
app.use(router);

// Initialize a port
app.set('port', process.env.PORT || 3000);

// Run Server
models.sequelize.sync().done(function () {
  app.listen(app.get('port'), function() {
    console.log("Server running");
  });
});