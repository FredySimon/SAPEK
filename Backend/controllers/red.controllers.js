const Red = require('../models/red');
const redCtrl = {};

redCtrl.getRedes = async (req, res) => {
    const redes = await Red.find();
    res.json(redes);
};

redCtrl.createRed = async (req, res) => {
    const red = new Red({
        nombre_red: req.body.nombre_red,
        curso: req.body.curso,
        nombre_curso: req.body.nombre_curso,
        fecha_inicio: req.body.fecha_inicio,
        fecha_final: req.body.fecha_final,
        observaciones: req.body.observaciones,
    });
    await red.save();
    res.json({'status': 'Red guardada.'}); 
}

redCtrl.getRed = async (req, res) => {
    const red = await Red.findById(req.params.id);
    res.json(red)
}

redCtrl.editRed = async (req, res) => {
    const { id } = req.params;
    const red = {
        nombre_red: req.body.nombre_red,
        curso: req.body.curso,
        nombre_curso: req.body.nombre_curso,
        fecha_inicio: req.body.fecha_inicio,
        fecha_final: req.body.fecha_final,
        observaciones: req.body.observaciones,
    };
    await Red.findByIdAndUpdate(id, {$set: red}, {new: true});
    res.json({status: 'Red actualizada.'})
};

redCtrl.deleteRed = async (req, res) => {
    await Red.findByIdAndRemove(req.params.id);
    res.json({status: 'Red eliminada.'})
}

module.exports = redCtrl;