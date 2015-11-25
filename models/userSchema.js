exports = module.exports = function(app, mongoose){

	var Schema = mongoose.Schema;

	var userSchema = new Schema({
		name: {
			type: String,
			require: 'El nombre es obligatorio',
			trim:true
		},
		last_name: {
			type: String,
			require: 'El apellido es obligatorio',
			trim:true
		},
		email: {
			type: String,
			require: 'El email es obligatorio',
			unique: true,
			//validar formato
			match: [/.+\@.+\..+/, "por favor entre un email válido"],
			trim:true
		},
		documento: {
			document_type: String,
			document_number: Number
		},
		products:[{id_product}]
	});

	mongoose.model('user', userSchema);

};

