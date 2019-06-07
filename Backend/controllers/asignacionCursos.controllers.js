const AsignacionCursos = require('../models/asignacionCurso');
const asignacionCursosCtrl = {};

asignacionCursosCtrl.getAsignacionesCursos = async (req, res) => {
    const asignaciones = await AsignacionCursos.find();
    res.json(asignaciones);
}

asignacionCursosCtrl.createAsignacionCurso = async (req, res) => {
    const asignacionCursos = new AsignacionCursos({
        jornada: req.body.jornada,
        curso_asignado: {
            curso: req.body.curso,
            nombre_curso: req.body.nombre_curso,
            codigo_curso: req.body.codigo_curso
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
    await asignacionCursos.save();
    res.json({'status': 'Asignacion realizada'})
}

asignacionCursosCtrl.getAsignacionCursos = async (req, res) => {
    const asignacionCursos = await AsignacionCursos.findById(req.params.id);
    res.json(asignacionCursos)
}

asignacionCursosCtrl.editSignacionCursos = async (req, res) => {
    const { id } = req.params;
    const asignacionCursos = {
        jornada: req.body.jornada,
        curso_asignado: {
            curso: req.body.curso,
            nombre_curso: req.body.nombre_curso,
            codigo_curso: req.body.codigo_curso
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
    await AsignacionCursos.findByIdAndUpdate(id, {$set: asignacionCursos}, {new: true});
    res.json({status: 'Asignacion actualizada.'})
}

asignacionCursosCtrl.deleteAsignacionCursos = async (req, res) => {
    await AsignacionCursos.findByIdAndRemove(req.params.id);
    res.json({status: 'Asignación eliminada.'})
}

module.exports = asignacionCursosCtrl;

