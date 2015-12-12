var mongoose = require('mongoose');

var ProductSolicitude  = mongoose.model('ProductSolicitude');
var Customer  = mongoose.model('Customer');

// Twilio Credentials 
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken);

exports.changeState = function(req, res) {
  ProductSolicitude.findOne({_id: req.params.id}, function(err, productSolicitude){
    if(err) return res.status(500).jsonp({error: err.message});

    if(productSolicitude === null) return res.status(404).jsonp({error: 'Product solicitude not found'});

    if(req.body.state != "aprobada" && req.body.state != "rechazada") return res.status(404).jsonp({error: 'State not allowed'});

    Customer.findOne({_id: productSolicitude.idCustomer}, function(err, customer){
      if(err) return res.status(500).jsonp({error: err.message});

      productSolicitude.state = req.body.state;

      productSolicitude.save(function(err) {
        if(err) return res.send(500).jsonp({error: err.message});

        var body = customer.name + ' ' + customer.lastName + ' tu solicitud ha sido' + ' ' + req.body.state + '.';

        client.messages.create({
          to: customer.cellNumber,
          from: "+16125644280",
          body: body
        }, function(err, message) {
          if(err) return res.status(503).jsonp({error: message});

          console.log('PUT /api/v1/solicitudes/' + req.params.id + '/changeState');
          res.status(200).jsonp(productSolicitude);
        });
      });
    });
  });
};