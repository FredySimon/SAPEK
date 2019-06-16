const mongoose = require('mongoose');
const { Schema } = mongoose;

const AsignacionRedSchema = new Schema({
    red_de_estudio: { type: String, required: true },
    // fecha_inicio: { type: Date, required: true },
    // fecha_final: { type: Date, required: true },
    cursos: { type: Array, required: true },
});

module.exports = mongoose.model('AsignacionRed', AsignacionRedSchema);