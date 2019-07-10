'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.set('useCreateIndex', true);

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true},
    rol : {type: String, required: true, enum : ['ADMINISTRADOR','DIRECTOR','SUBDIRECTOR','COORDINADOR','SECRETARIA'],}
}, {
    timestamps: true
});

module.exports = mongoose.model('Usuario', UsuarioSchema);  