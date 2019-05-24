const Familia = require('../models/familia');
const familiaCtrl = {};

familiaCtrl.getFamilias = async (req, res) => {
    const familias = await Familia.find();
    res.json(familias);
};

familiaCtrl.createFamilia = async (req, res ) => {
    const familia = new Familia({
        nombre_familia: req.body.nombre_familia,

        hijo1: req.body.hijo1,
        nombreHijo1: req.body.nombreHijo1,

        hijo2: req.body.hijo2,
        nombreHijo2: req.body.nombreHijo2,

        hijo3: req.body.hijo3,
        nombreHijo3: req.body.nombreHijo3,

        hijo4: req.body.hijo4,
        nombreHijo4: req.body.nombreHijo4,

        hijo5: req.body.hijo5,
        nombreHijo5: req.body.nombreHijo5,

        encargado: req.body.encargado,
        nombreEncargado: req.body.nombreEncargado,

        padre: req.body.padre,
        nombrePadre: req.body.nombrePadre,

        madre: req.body.madre,
        nombreMadre: req.body.nombreMadre,   
    });
    await familia.save();
    res.json({'status': 'Familia guardada.'});
}

familiaCtrl.getFamilia = async (req, res) => {
    const familia = await Familia.findById(req.params.id);
    res.json(familia)
}

familiaCtrl.editFamilia = async (req, res) => {
    const { id } = req.params;
    const familia = {
        nombre_familia: req.body.nombre_familia,

        hijo1: req.body.hijo1,
        nombreHijo1: req.body.nombreHijo1,

        hijo2: req.body.hijo2,
        nombreHijo2: req.body.nombreHijo2,

        hijo3: req.body.hijo3,
        nombreHijo3: req.body.nombreHijo3,

        hijo4: req.body.hijo4,
        nombreHijo4: req.body.nombreHijo4,

        hijo5: req.body.hijo5,
        nombreHijo5: req.body.nombreHijo5,

        encargado: req.body.encargado,
        nombreEncargado: req.body.nombreEncargado,

        padre: req.body.padre,
        nombrePadre: req.body.nombrePadre,

        madre: req.body.madre,
        nombreMadre: req.body.nombreMadre, 
    };
    await Familia.findByIdAndUpdate(id, {$set: familia}, {new:true});
    res.json({status: 'Familia actualizada.'})
};

familiaCtrl.deleteFamilia = async (req, res) => {
    await Familia.findByIdAndRemove(req.params.id);
    res.json({status: 'Familia eliminada.'})
}

module.exports = familiaCtrl;