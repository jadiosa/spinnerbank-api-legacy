exports = module.exports = function(app, mongoose){
  var Schema = mongoose.Schema;

  var serviceUserSchema = new Schema({
    userName: {
      type: String,
      require: 'El nombre de usuario es obligatorio',
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
    }
  });

  mongoose.model('ServiceUser', serviceUserSchema);

};

