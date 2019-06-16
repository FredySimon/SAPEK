const Familia = require('../models/familia');
const familiaCtrl = {};

familiaCtrl.getFamilias = async (req, res) => {
    const familias = await Familia.find();
    res.json(familias);};

familiaCtrl.createFamilia = async (req, res ) => {
    const familia = new Familia({
        nombre_familia: req.body.nombre_familia,
        hijos: req.body.hijos,
        encargado: req.body.encargado,
        padre: req.body.padre,
        madre: req.body.madre,
 
    });
    await familia.save();
    res.json({'status': 'Familia guardada.'});}

familiaCtrl.getFamilia = async (req, res) => {
    const familia = await Familia.findById(req.params.id);
    res.json(familia)}

familiaCtrl.editFamilia = async (req, res) => {
    const { id } = req.params;
    const familia = {
        nombre_familia: req.body.nombre_familia,
        hijos: req.body.hijos,
        encargado: req.body.encargado,
        padre: req.body.padre,
        madre: req.body.madre,
    };
    await Familia.findByIdAndUpdate(id, {$set: familia}, {new:true});
    res.json({'status': 'Familia actualizada.'})};

familiaCtrl.deleteFamilia = async (req, res) => {
    await Familia.findByIdAndRemove(req.params.id);
    res.json({'status': 'Familia eliminada.'})}

module.exports = familiaCtrl;