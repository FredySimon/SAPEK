const mongoose = require('mongoose');
const { Schema } = mongoose;

const InstructorSchema = new Schema ({
    codigo_profesor: { type: String, required: true, unique: true},
    persona: {type: Schema.ObjectId, ref: "persona", required: true},
    nombre_persona: { type: String, required: true},
    profesion: { type: String, required: true},
});

module.exports = mongoose.model('Instructor', InstructorSchema);