const AsignacionRed = require('../models/asignacionRed');
const asignacionRedCtrl = {};

asignacionRedCtrl.getAsignacionesRed = async (req, res) => {
    const asignaciones = await AsignacionRed.find();
    res.json(asignaciones);
};

asignacionRedCtrl.createAsignacionRed = async (req, res) => {
    const asignacionRed = new AsignacionRed({
        redDeEstucio : {
            red: req.body.red,
            nombre_red: req.body.nombre_red,
            fecha_inicio: req.body.fecha_inicio,
            fecha_final: req.body.fecha_final
        },
        cursos: req.body.cursos
    });
    await asignacionRed.save();
    res.json({'status': 'Asignacion realizada.'})
}

asignacionRedCtrl.getAsignacionRed = async (req, res) => {
    const asignacion = await AsignacionRed.findById(req.params.id);
    res.json(asignacion)
}

asignacionRedCtrl.editAsignacionRed = async (req, res) => {
    const { id } = req.params;
    const asignacionRed = {
        redDeEstucio : {
            red: req.body.red,
            nombre_red: req.body.nombre_red,
            fecha_inicio: req.body.fecha_inicio,
            fecha_final: req.body.fecha_final
        },
        cursos: req.body.cursos
    };
    await AsignacionRed.findByIdAndUpdate(id, {$set: asignacionRed}, {new: true});
    res.json({status: 'Asignacion actualizada'})
}

asignacionRedCtrl.deleteAsignacionRed = async (req, res) => {
    await AsignacionRed.findByIdAndRemove(req.params.id);
    res.json({status: 'Asignacion eliminada.'})
}

module.exports = asignacionRedCtrl;