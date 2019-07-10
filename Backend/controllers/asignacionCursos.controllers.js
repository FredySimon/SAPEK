const AsignacionCursos = require('../models/asignacionCurso');
const asignacionCursosCtrl = {};

asignacionCursosCtrl.getAsignacionesCursos = async (req, res) => {
    const asignaciones = await AsignacionCursos.find();
    res.json(asignaciones);
}

asignacionCursosCtrl.createAsignacionCurso = async (req, res) => {
    const asignacionCursos = new AsignacionCursos({
        jornada: req.body.jornada,
        curso: req.body.curso,
        instructores: req.body.instructores
    });
    await asignacionCursos.save();
    res.json({'status': 'Asignacion realizada'})
}

asignacionCursosCtrl.getAsignacionCursos = async (req, res) => {
    const asignacionCursos = await AsignacionCursos.findById(req.params.id);
    res.json(asignacionCursos)
}

asignacionCursosCtrl.editSignacionCursos = async (req, res) => {
    const { id } = req.params;
    const asignacionCursos = {
        jornada: req.body.jornada,
        curso: req.body.curso,
        instructores: req.body.instructores
    };
    await AsignacionCursos.findByIdAndUpdate(id, {$set: asignacionCursos}, {new: true});
    res.json({status: 'Asignacion actualizada.'})
}

asignacionCursosCtrl.deleteAsignacionCursos = async (req, res) => {
    await AsignacionCursos.findByIdAndRemove(req.params.id);
    res.json({status: 'Asignación eliminada.'})
}

module.exports = asignacionCursosCtrl;

