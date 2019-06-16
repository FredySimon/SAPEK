const mongoose = require('mongoose');
const { Schema } = mongoose;

const RedSchema = new Schema ({
    nombre_red: { type: String, required: true, unique: true, uppercase : true},
    carrera: { type: String, required: true, uppercase : true},
    fecha_inicio: {type: Date, required: true},
    fecha_final: {type: Date, required: true},

    jornada: { type: String, required: false},
    seccion: { type: String, required: false},
    grado: { type: String, required: false},

    cursos: { type: Array, required: true },
});

module.exports = mongoose.model('Red', RedSchema);