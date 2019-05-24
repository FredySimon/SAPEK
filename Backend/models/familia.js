const mongoose = require('mongoose');
const { Schema } = mongoose;

const FamiliaSchema = new Schema ({
    nombre_familia: { type: String, required: true},

    hijo1: {type: Schema.ObjectId, ref: "persona", required: true},
    nombreHijo1: { type: String, required: false},

    hijo2: {type: Schema.ObjectId && String, ref: "persona", required: false},
    nombreHijo2: { type: String, required: false},

    hijo3: {type: Schema.ObjectId && String, ref: "persona", required: false},
    nombreHijo3: { type: String, required: false},

    hijo4: {type: Schema.ObjectId && String, ref: "persona", required: false},
    nombreHijo4: { type: String, required: false},

    hijo5: {type: Schema.ObjectId && String, ref: "persona", required: false},
    nombreHijo5: { type: String, required: false},

    encargado: {type: Schema.ObjectId, ref: "persona", required: true},
    nombreEncargado: { type: String, required: false},

    padre: {type: Schema.ObjectId && String, ref: "persona", required: false},
    nombrePadre: { type: String, required: false},

    madre: {type: Schema.ObjectId && String, ref: "persona", required: false},  
    nombreMadre: { type: String, required: false},
});

module.exports = mongoose.model('Familia', FamiliaSchema);