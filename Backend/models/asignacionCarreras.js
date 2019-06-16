const mongoose = require('mongoose');
const { Schema } = mongoose;

const AsigancionCarreraSchema = new Schema ({
    jornada: { type: String, required: true},
    seccion: { type: String, required: true},
    grado: { type: String, required: true},

    nombre_carrera: { type: String, required: true},

    instructores:{
        instructorI: {
            instructor: {type: Schema.ObjectId, ref: "instructor", required: true},
            nombre_instructor: { type: String, required: true}
        },
    
        instructorII: {
            instructor1: {type: Schema.ObjectId, ref: "instructor", required: false},
            nombre_instructor1: { type: String, required: false}
        },
    
        instructorIII: {
            instructor2: {type: Schema.ObjectId, ref: "instructor", required: false},
            nombre_instructor2: { type: String, required: false}
        } 
    }
      
});

module.exports = mongoose.model('AsignacionCarrera', AsigancionCarreraSchema);