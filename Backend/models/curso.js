const mongoose = require('mongoose');
const { Schema } = mongoose;

const CursoSchema = new Schema({
    codigo_curso: { type: String, required: true, unique: true},
    nombre_curso: { type: String, required: true, unique: true, uppercase : true},
    inicio: {type: String, required:true},
    final: {type: String, required:true},
});

module.exports = mongoose.model('Curso', CursoSchema);