const mongoose = require('mongoose');
const { Schema } = mongoose;

const UnidadSchema = new Schema ({
    nombre_unidad: {type: String, required: true, uppercase: true},
});

module.exports = mongoose.model('Unidad', UnidadSchema);