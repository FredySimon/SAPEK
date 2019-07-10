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

        carrera: req.body.carrera,

        instructores: req.body.instructores,
    });

        if(asignacionC.grado === 'PRIMERO'){
            asignacionC.jornada = 'MATUTINA'
            await asignacionC.save();
            res.json({'status': 'Asignacion realizada.'}) 
        } else if(asignacionC.grado === 'SEGUNDO'){
            asignacionC.jornada = 'MATUTINA'
            await asignacionC.save();
            res.json({'status': 'Asignacion realizada.'}) 
        } else if(asignacionC.grado === 'TERCERO'){
            asignacionC.jornada = 'MATUTINA'
            await asignacionC.save();
            res.json({'status': 'Asignacion realizada.'}) 
        }else {
            await asignacionC.save();
            res.json({'status': 'Asignacion realizada.'}) 
        }      
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

        carrera: req.body.carrera,

        instructores: req.body.instructores,
    };

    if(asignacionC.grado === 'PRIMERO'){
        asignacionC.jornada = 'MATUTINA'
        await AsignacionC.findByIdAndUpdate(id, {$set: asignacionC}, {new: true});
        res.json({status: 'Asignación actualizada.'})
    } else if(asignacionC.grado === 'SEGUNDO'){
        asignacionC.jornada = 'MATUTINA'
        await AsignacionC.findByIdAndUpdate(id, {$set: asignacionC}, {new: true});
        res.json({status: 'Asignación actualizada.'})
    } else if(asignacionC.grado === 'TERCERO'){
        asignacionC.jornada = 'MATUTINA'
        await AsignacionC.findByIdAndUpdate(id, {$set: asignacionC}, {new: true});
        res.json({status: 'Asignación actualizada.'})
    } else {
        await AsignacionC.findByIdAndUpdate(id, {$set: asignacionC}, {new: true});
        res.json({status: 'Asignación actualizada.'})
    }
}

asignacionCarreraCtrl.deleteASignacionC = async (req, res) => {
    await AsignacionC.findByIdAndRemove(req.params.id);
    res.json({status: 'Asignación eliminada.'})
}

module.exports = asignacionCarreraCtrl;