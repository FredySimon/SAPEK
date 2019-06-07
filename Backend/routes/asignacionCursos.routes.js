const express = require('express');
const router = express.Router();
const asignacionCursosCtrl = require('../controllers/asignacionCursos.controllers');

router.get('/', asignacionCursosCtrl.getAsignacionesCursos);
router.post('/', asignacionCursosCtrl.createAsignacionCurso);
router.get('/:id', asignacionCursosCtrl.getAsignacionCursos);
router.put('/:id', asignacionCursosCtrl.editSignacionCursos);
router.delete('/:id', asignacionCursosCtrl.deleteAsignacionCursos);

module.exports = router;