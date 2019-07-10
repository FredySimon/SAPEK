const mongoose = require('mongoose');
const { Schema } = mongoose;

const InstructorSchema = new Schema ({
    codigo_profesor: { type: String, required: true},
    persona: { type: String, required: true},
    profesion: { type: String, required: true, uppercase: true},
});

module.exports = mongoose.model('Instructor', InstructorSchema);