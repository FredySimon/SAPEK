const mongoose = require('mongoose');
const { Schema } = mongoose;

const CursoSchema = new Schema({
    codigo_curso: { type: String, required: true, unique: true},
    nombre_curso: { type: String, required: true, unique: true},
});

module.exports = mongoose.model('Curso', CursoSchema);