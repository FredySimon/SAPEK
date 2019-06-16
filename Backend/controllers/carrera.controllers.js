const Carrera = require('../models/carrera');
const carreraCtrl = {};

carreraCtrl.getCarreras = async (req, res) => {
    const carreras = await Carrera.find();
    res.json(carreras)};

carreraCtrl.createCarrera = async (req, res) => {
    const carrera = new Carrera({
        nombre_carrera: req.body.nombre_carrera,
        codigo: req.body.codigo,
        inicio: req.body.inicio,
        final: req.body.final,
    });
    await carrera.save();
    res.json({'status': 'Carrera guardada'})
    console.log(carrera) }

carreraCtrl.getCarrera = async(req, res) => {
    const carrera = await Carrera.findById(req.params.id);
    res.json(carrera);};

carreraCtrl.editCarrera = async (req, res) => {
    const { id } = req.params;
    const carrera = {
        nombre_carrera: req.body.nombre_carrera,
        codigo: req.body.codigo,
        inicio: req.body.inicio,
        final: req.body.final,
    };
    await Carrera.findByIdAndUpdate(id, {$set: carrera}, {new: true});
    res.json({status: 'Carrera actualizada'})};

carreraCtrl.deleteCarrera = async (req, res) => {
    await Carrera.findByIdAndRemove(req.params.id);
    res.json({status: 'Carrera eliminada.'})}; 

module.exports = carreraCtrl;