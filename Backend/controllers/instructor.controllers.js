const Instructor = require('../models/instructor');
const instructorCtrl = {};

instructorCtrl.getInstructores = async (req, res) => {
    const instructores = await Instructor.find();
    res.json(instructores);
};

instructorCtrl.createInstructor = async (req, res) =>{
    const instructor = new Instructor({
        codigo_profesor: req.body.codigo_profesor,
        persona: req.body.persona,
        nombre_persona: req.body.nombre_persona,
        profesion: req.body.profesion,
    });
        await instructor.save();
        res.json({'status': 'Instructor guardado'})

}

instructorCtrl.getInstructor = async (req, res) => {
    const instructor = await Instructor.findById(req.params.id);
    res.json(instructor)
}

instructorCtrl.editInstructor = async (req, res) => {
    const { id } = req.params;
    const instructor = {
        codigo_profesor: req.body.codigo_profesor,
        persona: req.body.persona,
        nombre_persona: req.body.nombre_persona,
        profesion: req.body.profesion,
    };
    await Instructor.findByIdAndUpdate(id, {$set: instructor}, {new:true});
    res.json({status: 'Instructor actualizado.'})
}

instructorCtrl.deleteInstructor = async (req, res) => {
    await Instructor.findByIdAndRemove(req.params.id);
    res.json({status: 'Instructor eliminado.'})
}

module.exports = instructorCtrl;