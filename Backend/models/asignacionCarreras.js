const mongoose = require('mongoose');
const { Schema } = mongoose;

const AsigancionCarreraSchema = new Schema ({
    grado: { type: String, required: true},
    seccion: { type: String, required: true},
    jornada: { type: String, required: false},
    
    carrera: { type: String, required: false},

    instructores: { type: Array, required: true },
    
});

module.exports = mongoose.model('AsignacionCarrera', AsigancionCarreraSchema);