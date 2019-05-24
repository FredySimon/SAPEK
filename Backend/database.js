const mongoose = require('mongoose');

const url = 'mongodb://localhost/SAPEK';

mongoose.connect(url)
    .then(db => console.log('Conectado a la base de datos.'))
    .catch(err => console.error(err));

module.exports = mongoose;