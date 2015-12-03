exports = module.exports = function(app, mongoose){

	var Schema = mongoose.Schema;

	var transactionSchema = new Schema({
		date: {
			type: Date,
			default: Date.now
		},
		description: {
			type: String
		},
		value: {
			type: Number,
			trim:true
		},
		balance:{
			type: Number,
			trim:true
		},
		idCustomer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
    },
		idProduct: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
	  },
	  createdAt: {
			type: Date,
			default: Date.now
		},
		updatedAt: {
			type: Date,
			default: Date.now
		}
	});

	mongoose.model('Transaction', transactionSchema);

};
