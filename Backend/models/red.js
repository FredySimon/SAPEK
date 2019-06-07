const mongoose = require('mongoose');
const { Schema } = mongoose;

const RedSchema = new Schema ({
    nombre_red: { type: String, required: true, unique: true, uppercase : true},
    carrera: {type: Schema.ObjectId, ref: "carrera", required: true},
    nombre_carrera: { type: String, required: true, uppercase : true},
    fecha_inicio: {type: Date, required: true},
    fecha_final: {type: Date, required: true},
});

module.exports = mongoose.model('Red', RedSchema);