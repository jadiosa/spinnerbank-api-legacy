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
      default: 'pendiente', // Pendiente, Aprobada, Rechazada
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
    idAssessor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Assessor'
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