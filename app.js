var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    http        = require('http'),
    server      = http.createServer(app),
    Sequelize   = require('sequelize'),
    router      = express.Router();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set DataBase
var sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://makers:12345678@localhost:5432/spinner_bank');

router.get('/', function(req, res) {
  res.send("Hello World!");
});
app.use(router);

// Initialize a port
app.set('port', process.env.PORT || 3000);

// Run Server
sequelize.sync().done(function (err) {
  app.listen(app.get('port'), function() {
    console.log("Server running");
  });
});