const mongoose = require('mongoose');
const { Schema } = mongoose;

const PersonaSchema = new Schema({
    genero: { type: String, required: true, uppercase : true },
    estado_civil: { type: String, required: true, uppercase : true },

    primer_nombre: { type: String, required: true, uppercase : true },
    segundo_nombre: { type: String, required: false, uppercase : true },
    primer_apellido: { type: String, required: true, uppercase : true },
    segundo_apellido: { type: String, required: false, uppercase : true },
    apellido_conyugal: { type: String, required: false, uppercase : true },
    fecha_nacimiento: { type: Date, required: true },
    religion: { type: String, required: true, uppercase : true },

    correos: { type: Array, required: true },

    direccion: {
        departamento: { type: String, required: true, uppercase : true },
        municipio: { type: String, required: true, uppercase : true },
        zona: { type: Number, required: true },
        avenida: { type: String, required: false, uppercase : true },
        calle: { type: String, required: false, uppercase : true },
        noCasa: { type: String, required: false, uppercase : true },

        colonia: { type: String, required: false, uppercase : true },
        boulevard: { type: String, required: false, uppercase : true },
        lote: { type: String, required: false, uppercase : true },
        residenciales: { type: String, required: false, uppercase : true },
        diagonal: { type: String, required: false, uppercase : true },
        calzada: { type: String, required: false, uppercase : true },
        ruta: { type: String, required: false, uppercase : true },

        manzana: { type: String, required: false, uppercase : true },
        cuadra: { type: String, required: false, uppercase : true },
        sector: { type: String, required: false, uppercase : true },
        edificio: { type: String, required: false, uppercase : true },
        nivel: { type: String, required: false, uppercase : true },

        apartamento: { type: String, required: false, uppercase : true },
        kilometro: { type: String, required: false, uppercase : true },
        carretera: { type: String, required: false, uppercase : true },
        aldea: { type: String, required: false, uppercase : true },
        otra_direccion: { type: String, required: false, uppercase : true },
    },

    celulares: { type: Array, required: true }
});

module.exports = mongoose.model('Persona', PersonaSchema);