exports = module.exports = function(app, mongoose){
  var Schema = mongoose.Schema;

  var customerSchema = new Schema({
    name: {
      type: String,
      require: 'El nombre es obligatorio',
      trim:true
    },
    lastName: {
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
    documentNumber: {
      type: Number,
      require: 'El numero de documento es obligatorio',
      unique: true
    },
    documentType: {
      type: String,
      require: 'El tipo de documento es obligatorio',
      trim: true
    },
    cellNumber: {
      type: String,
      trim: true
    },
    products:[{ type : mongoose.Schema.Types.ObjectId, ref: 'Product' }]
  });

  mongoose.model('Customer', customerSchema);

};