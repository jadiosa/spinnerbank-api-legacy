exports = module.exports = function(app, mongoose){
	var crypto = require('crypto');
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
		password: {
			type: String,
			require: 'Ingrese la contraseña',
			validate:[
				function(passwd){
					return passwd && passwd.length >= 6;
				}, 'Escriba un password mas largo'
			]
		},
		salt:{
			type: String
		},
		document_number: {
			type: Number,
			require: 'El numero de documento es obligatorio'
		},
		document_type: {
			type: String,
			require: 'El tipo de documento es obligatorio',
			trim: true
		},
		products:[{ type : mongoose.Schema.Types.ObjectId, ref: 'Product' }]
	});

	//Crear un método instancia para hashing una contraseña
	userSchema.methods.hashPassword = function(password) {
		return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
	};

	//Crear un método instancia para autentificar usuario
	userSchema.methods.authenticate = function(password) {
		return this.password === this.hashPassword(password);
	};

	mongoose.model('User', userSchema);

};

