const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonaSchema = new Schema({
    genero: { type: String, required: true },
    estado_civil: { type: String, required: true },

    primer_nombre: { type: String, required: true },
    segundo_nombre: { type: String, required: false },
    primer_apellido: { type: String, required: true },
    segundo_apellido: { type: String, required: false },
    apellido_conyugal: { type: String, required: false },
    fecha_nacimiento: { type: Date, required: true },
    religion: { type: String, required: true },

    correo:{type: Array, required: true},

    correo_electronico: {
        correo_electronico1: { type: String, required: true, match: /.+\@.+\..+/ },
        correo_electronico2: { type: String, required: false, match: /.+\@.+\..+/ },
        correo_electronico3: { type: String, required: false, match: /.+\@.+\..+/ },
        correo_electronico4: { type: String, required: false, match: /.+\@.+\..+/ },
        correo_electronico5: { type: String, required: false, match: /.+\@.+\..+/ },
    },

    direccion: {
        departamento: { type: String, required: true },
        municipio: { type: String, required: true },
        zona: { type: Number, required: true },
        avenida: { type: String, required: false },
        calle: { type: String, required: false },
        noCasa: { type: String, required: false },

        colonia: { type: String, required: false },
        boulevard: { type: String, required: false },
        lote: { type: String, required: false },
        residenciales: { type: String, required: false },
        diagonal: { type: String, required: false },
        calzada: { type: String, required: false },
        ruta: { type: String, required: false },

        manzana: { type: String, required: false },
        cuadra: { type: String, required: false },
        sector: { type: String, required: false },
        edificio: { type: String, required: false },
        nivel: { type: String, required: false },

        apartamento: { type: String, required: false },
        kilometro: { type: String, required: false },
        carretera: { type: String, required: false },
        aldea: { type: String, required: false },
        otra_direccion: { type: String, required: false },
    },

    telefonos: {
        celular: { type: Number, required: true },
        casa: { type: Number, required: false },
        otro1: { type: Number, required: false },
        otro2: { type: Number, required: false },
        otro3: { type: Number, required: false },
    }
});

module.exports = mongoose.model('Persona', PersonaSchema);