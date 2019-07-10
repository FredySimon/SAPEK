const mongoose = require('mongoose');
const { Schema } = mongoose;

const FamiliaSchema = new Schema ({
    nombre_familia: { type: String, required: true},
    hijos: { type: Array, required: true },

    encargado: { type: String, required: true},
    padre: { type: String, required: false},
    madre: { type: String, required: false},
});

module.exports = mongoose.model('Familia', FamiliaSchema);