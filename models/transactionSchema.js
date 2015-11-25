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
		}
		id_user: String,
		id_product: String
	});

	mongoose.model('transaction', transactionSchema);

};
