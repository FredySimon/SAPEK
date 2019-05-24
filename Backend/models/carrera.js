const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarreraSchema = new Schema ({
    nombre_carrera: { type: String, required: true, unique: true},
    codigo: { type: String, required: true, unique: true},
    inicio: {type: String, required:true},
    final: {type: String, required:true},
    descripcion: { type: String, required: false, unique: false},
});
module.exports = mongoose.model('Carrera', CarreraSchema);