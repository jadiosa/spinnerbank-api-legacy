var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose'),
    router          = express.Router();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Models
var ServiceUser = require('./models/serviceUserSchema')(app, mongoose);
var Customer = require('./models/customerSchema')(app, mongoose);
var Product = require('./models/productSchema')(app, mongoose);
var Transaction = require('./models/transactionSchema')(app, mongoose);
var ProductSolicitude = require('./models/productSolicitudeSchema')(app, mongoose);
var Assessor = require('./models/assessorSchema')(app, mongoose);

//Controllers
var ProductsController = require('./controllers/productsController');
var TransactionsController = require('./controllers/transactionsController');

//API Routes
router.route('/customers/:email/products')
  .get(ProductsController.findAllCustomerProducts);

router.route('/customers/:email/products/:idProduct/transactions')
  .get(TransactionsController.findAllCustomerProductTransactions);

// Connection to DB
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/spinnerbank_development';

mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
});

// The http server will listen to an appropriate port, or default to
// port 5000.
var port = process.env.PORT || 5000;

app.use('/api/v1', router);

app.listen(port, function() {
  console.log('Node Server Running in the port:'+port);
});