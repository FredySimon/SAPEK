const mongoose = require('mongoose');
const { Schema } = mongoose;

const AsignacionRedSchema = new Schema ({
    redDeEstucio : {
        red: {type: Schema.ObjectId, ref: "red", required: true},
        nombre_red: { type: String, required: true},
        fecha_inicio: {type: Date, required: true},
        fecha_final: {type: Date, required: true},
    },
    cursos: {type: Array, required: true},
});

module.exports = mongoose.model('AsignacionRed', AsignacionRedSchema);