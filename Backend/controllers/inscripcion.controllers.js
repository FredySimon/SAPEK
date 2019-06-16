const Inscripcion = require('../models/inscripcion');
const inscripcionCtrl = {};

inscripcionCtrl.getInscripciones = async (req, res) => {
    const inscripciones = await Inscripcion.find();
    res.json(inscripciones);
};

inscripcionCtrl.createInscripcion = async (req, res) => {
    const inscripcion = new Inscripcion({
        estudiante : req.body.estudiante,
        unidad_academica : req.body.unidad_academica,
        jornada : req.body.jornada,
        cuota_mensual : req.body.cuota_mensual,
        grado : req.body.grado,
        carrera : req.body.carrera,
        seccion : req.body.seccion,
        curso : req.body.curso
    });
    await inscripcion.save();
    res.json({'status' : 'Inscripcion realizada.'})
}

inscripcionCtrl.getInscripcion = async (req, res) => {
    const inscripcion = await Inscripcion.findById(req.params.id);
    res.json(inscripcion)
}

inscripcionCtrl.editInscripcion = async (req, res) => {
    const { id } = req.params;
    const inscripcion = {
        estudiante : req.body.estudiante,
        unidad_academica : req.body.unidad_academica,
        jornada : req.body.jornada,
        cuota_mensual : req.body.cuota_mensual,
        grado : req.body.grado,
        carrera : req.body.carrera,
        seccion : req.body.seccion,
        curso : req.body.curso
    };
    await Inscripcion.findByIdAndUpdate(id, {$set: inscripcion}, {new: true});
    res.json({status: 'Inscripción modificada.'})
};

inscripcionCtrl.deleteInscripcion = async (req, res) => {
    await Inscripcion.findByIdAndRemove(req.params.id);
    res.json({status: 'Inscripción eliminada.'})
};

module.exports = inscripcionCtrl;