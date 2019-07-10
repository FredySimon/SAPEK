const mongoose = require('mongoose');
const { Schema } = mongoose;

const ASignacionCursoSchema = new Schema({
    jornada: { type: String, required: true},

    curso: { type: String, required: true},

    instructores: { type: Array, required: true },
});

module.exports = mongoose.model('AsignacionCurso', ASignacionCursoSchema);