const Persona = require('../models/persona');
const personaCtrl = {};

personaCtrl.getPersonas = async (req, res) => {
    const personas = await Persona.find();
    res.json(personas);};

personaCtrl.createPersona = async (req, res) => {
    const persona = new Persona({
        genero: req.body.genero,
        estado_civil: req.body.estado_civil,

        primer_nombre: req.body.primer_nombre,
        segundo_nombre: req.body.segundo_nombre,
        primer_apellido: req.body.primer_apellido,
        segundo_apellido: req.body.segundo_apellido,
        apellido_conyugal: 'DE ' + req.body.apellido_conyugal,
        fecha_nacimiento: req.body.fecha_nacimiento,
        religion: req.body.religion,

        correos:req.body.correos,

        direccion: {
            departamento: req.body.departamento,
            municipio: req.body.municipio,
            zona: req.body.zona,

            avenida: req.body.avenida,
            calle: req.body.calle,
            noCasa: req.body.noCasa,

            colonia: req.body.colonia,
            boulevard: req.body.boulevard,
            lote: req.body.lote,
            residenciales: req.body.residenciales,
            diagonal: req.body.diagonal,
            calzada: req.body.calzada,
            ruta: req.body.ruta,
            manzana: req.body.manzana,
            cuadra: req.body.cuadra,
            sector: req.body.sector,
            edificio: req.body.edificio,
            nivel: req.body.nivel,
            apartamento: req.body.apartamento,
            kilometro: req.body.kilometro,
            carretera: req.body.carretera,
            aldea: req.body.aldea,
            otra_direccion: req.body.otra_direccion,
        },

        celulares: req.body.celulares
    });
    await persona.save();
    res.json({
        'status': 'Persona guardada.'
    });}

personaCtrl.getPersona = async (req, res) => {
    const persona = await Persona.findById(req.params.id);
    res.json(persona);};

personaCtrl.editPersona = async (req, res) => {
    const { id } = req.params;
    const persona = {
        genero: req.body.genero,
        estado_civil: req.body.estado_civil,

        primer_nombre: req.body.primer_nombre,
        segundo_nombre: req.body.segundo_nombre,
        primer_apellido: req.body.primer_apellido,
        segundo_apellido: req.body.segundo_apellido,
        apellido_conyugal: req.body.apellido_conyugal,
        fecha_nacimiento: req.body.fecha_nacimiento,
        religion: req.body.religion,

        correos:req.body.correos,

        direccion: {
            departamento: req.body.departamento,
            municipio: req.body.municipio,
            zona: req.body.zona,

            avenida: req.body.avenida,
            calle: req.body.calle,
            noCasa: req.body.noCasa,

            colonia: req.body.colonia,
            boulevard: req.body.boulevard,
            lote: req.body.lote,
            residenciales: req.body.residenciales,
            diagonal: req.body.diagonal,
            calzada: req.body.calzada,
            ruta: req.body.ruta,
            manzana: req.body.manzana,
            cuadra: req.body.cuadra,
            sector: req.body.sector,
            edificio: req.body.edificio,
            nivel: req.body.nivel,
            apartamento: req.body.apartamento,
            kilometro: req.body.kilometro,
            carretera: req.body.carretera,
            aldea: req.body.aldea,
            otra_direccion: req.body.otra_direccion,
        },

        celulares: req.body.celulares
    };
    await Persona.findByIdAndUpdate(id, { $set: persona }, { new: true });
    res.json({ status: 'Persona actualizada.' })};

personaCtrl.deletePersona = async (req, res) => {
    await Persona.findByIdAndRemove(req.params.id);
    res.json({ status: 'Persona eliminada.' })}

module.exports = personaCtrl;



