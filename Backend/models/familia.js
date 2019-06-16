const mongoose = require('mongoose');
const { Schema } = mongoose;

const FamiliaSchema = new Schema ({
    nombre_familia: { type: String, required: true},
    hijos: { type: Array, required: true },

    encargado: { type: String, required: true, uppercase : true},
    padre: { type: String, required: false, uppercase : true},
    madre: { type: String, required: false, uppercase : true},
});

module.exports = mongoose.model('Familia', FamiliaSchema);