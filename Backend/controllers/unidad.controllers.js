const Unidad = require('../models/unidad');
const unidadCtrl = {}; 

unidadCtrl.getUnidades = async (req, res) => {
    const unidades = await Unidad.find();
    res.json(unidades)
}; 

unidadCtrl.createUnidad = async (req, res) => {
    const unidad = new Unidad({
        nombre_unidad: req.body.nombre_unidad,
    }); 
    await unidad.save(); 
    res.json({'status': 'Unidad guardada.'});
}

unidadCtrl.getUnidad = async (req, res) => {
    const unidad = await Unidad.findById(req.params.id); 
    res.json(unidad);
}; 

unidadCtrl.editUnidad = async (req, res) => {
    const { id } = req.params;
    const unidad = {
        nombre_unidad: req.body.nombre_unidad,
    };
    await Unidad.findByIdAndUpdate(id, {$set: unidad}, {new: true});
    res.json({status: 'Unidad actualizada'})
};

unidadCtrl.deleteUnidad = async (req, res) => {
    await Unidad.findByIdAndRemove(req.params.id);
    res.json({status: 'Unidad eliminada.'})
};

module.exports = unidadCtrl;