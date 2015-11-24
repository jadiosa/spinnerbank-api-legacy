'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

	var spinnerbankSchema = new Schema({
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
		products:{
			name: {
				type: String,
				require: 'El nombre es obligatorio',
				trim:true
			},
			product_type: {
				type: String,
				require: 'Ingrese el tipo de producto',
				trim:true
			},
			balance:{
				type: Number,
				trim:true
			},
			transactions:[{type: Schema.Type.ObjectId, ref: 'Transactions'}]
		}		
	});

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
		}
	});

	mongoose.model('SpinnerBank', spinnerbankSchema);
	mongoose.model('Transactions', transactionSchema);

