const express = require('express');
const router = express.Router();
const cursoCtrl = require('../controllers/curso.controllers');

router.get('/', cursoCtrl.getCursos);
router.post('/', cursoCtrl.createCurso);
router.get('/:id', cursoCtrl.getCurso);
router.put('/:id', cursoCtrl.editCurso);
router.delete('/:id', cursoCtrl.deleteCurso);

module.exports = router;