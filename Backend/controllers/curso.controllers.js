const Curso = require('../models/curso');
const cursoCtrl = {};

cursoCtrl.getCursos = async (req, res) => {
    const cursos = await Curso.find();
    res.json(cursos);
};

cursoCtrl.createCurso = async (req, res) => {
    const curso = new Curso({
        codigo_curso: req.body.codigo_curso,
        nombre_curso: req.body.nombre_curso,
        inicio: req.body.inicio,
        final: req.body.final,
    });

    await curso.save();
    res.json({'status': 'Curso '});
};

cursoCtrl.getCurso = async (req, res) => {
    const curso = await Curso.findById(req.params._id);
    res.json(curso);
};

cursoCtrl.editCurso = async (req, res) => {
    const { id } = req.params;
    const curso = {
        codigo_curso: req.body.codigo_curso,
        nombre_curso: req.body.nombre_curso,
        inicio: req.body.inicio,
        final: req.body.final,
    };
    await Curso.findByIdAndUpdate(id, {$set: curso}, {new: true});
    res.json({status: 'Curso actualizado.'})
};

cursoCtrl.deleteCurso = async (req, res) => {
    await Curso.findByIdAndRemove(req.params.id);
    res.json({status: 'Curso eliminado.'})
}

module.exports = cursoCtrl;