exports = module.exports = function(app, mongoose){

  var Schema = mongoose.Schema;

  var assessorSchema = new Schema({
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
    }
  });

  mongoose.model('Assessor', assessorSchema);

};