const mongoose = require('mongoose');
const { Schema } = mongoose;

const RedSchema = new Schema ({
    nombre_red: { type: String, required: true},
    curso: {type: Schema.ObjectId, ref: "curso", required: true},
    nombre_curso: { type: String, required: true},
    fecha_inicio: {type: Date, required: true},
    fecha_final: {type: Date, required: true},
    observaciones: { type: String, required: false},
});

module.exports = mongoose.model('Red', RedSchema);