exports = module.exports = function(app, mongoose){

  var Schema = mongoose.Schema;

  var productSolicitudeSchema = new Schema({
    description: {
      type: String,
      require: 'La descripción es obligatoria',
      trim:true
    },
    state: {
      type: String,
      default: 'pendiente', // Pendiente, Aprobado, Rechazado
      require: 'El estado es obligatorio'
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

  mongoose.model('ProductSolicitude', productSolicitudeSchema);

};