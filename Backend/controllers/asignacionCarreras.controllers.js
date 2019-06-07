const AsignacionC = require('../models/asignacionCarreras');
const asignacionCarreraCtrl = {};

asignacionCarreraCtrl.getAsignacionesC = async (req, res) => {
    const asignaciones = await AsignacionC.find();
    res.json(asignaciones);
}

asignacionCarreraCtrl.createAsignacionC = async (req, res) => {
    const asignacionC = new AsignacionC({
        jornada: req.body.jornada,
        seccion: req.body.seccion,
        grado: req.body.grado,
        carrera_asignada:{
            carrera: req.body.carrera,
            nombre_carrera: req.body.nombre_carrera,
            codigo_carrera: req.body.codigo_carrera
        },

        instructores:{
            instructorI:{
                instructor: req.body.instructor,
                nombre_instructor: req.body.nombre_instructor
            },
    
            instructorII:{
                instructor1: req.body.instructor1,
                nombre_instructor1: req.body.nombre_instructor1
            },
    
            instructorIII:{
                instructor2: req.body.instructor2,
            nombre_instructor2: req.body.nombre_instructor2
            }
        }
    });

        await asignacionC.save();
        res.json({'status': 'Asignacion realizada.'}) 
}

asignacionCarreraCtrl.getAsignacionC = async (req, res) => {
    const asignacionC = await AsignacionC.findById(req.params.id);
    res.json(asignacionC)
}

asignacionCarreraCtrl.editASignacionC = async (req, res) => {
    const { id } = req.params;
    const asignacionC = {
        jornada: req.body.jornada,
        seccion: req.body.seccion,
        grado: req.body.grado,
        carrera_asignada:{
            carrera: req.body.carrera,
            nombre_carrera: req.body.nombre_carrera,
            codigo_carrera: req.body.codigo_carrera
        },
        
        instructores:{
            instructorI:{
                instructor: req.body.instructor,
                nombre_instructor: req.body.nombre_instructor
            },
    
            instructorII:{
                instructor1: req.body.instructor1,
                nombre_instructor1: req.body.nombre_instructor1
            },
    
            instructorIII:{
                instructor2: req.body.instructor2,
            nombre_instructor2: req.body.nombre_instructor2
            }
        }
    };
    await AsignacionC.findByIdAndUpdate(id, {$set: asignacionC}, {new: true});
    res.json({status: 'Asignación actualizada.'})
}

asignacionCarreraCtrl.deleteASignacionC = async (req, res) => {
    await AsignacionC.findByIdAndRemove(req.params.id);
    res.json({status: 'Asignación eliminada.'})
}

module.exports = asignacionCarreraCtrl;