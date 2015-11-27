exports = module.exports = function(app, mongoose){

	var Schema = mongoose.Schema;

	var productSchema = new Schema({
		name: {
			type: String,
			require: 'El nombre es obligatorio',
			trim:true
		},
		productType: {
			type: String,
			require: 'Ingrese el tipo de producto',
			trim:true
		}		
	});

	mongoose.model('Product', productSchema);

};