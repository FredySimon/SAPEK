const mongoose = require('mongoose');
const { Schema } = mongoose;

const InscripcionSchema = new Schema({
        estudiante : { type: String, required: true},
        unidad_academica : { type: String, required: true},
        jornada : { type: String, required: false},
        cuota_mensual: { type: String, required: true},
        grado: {type: String, required: false},
        carrera: {type: String, required: false},
        seccion : {type: String, required: false},
        curso: {type: String, required: false}
});

module.exports = mongoose.model('Inscripcion', InscripcionSchema);