const express = require('express');
const router = express.Router();
const inscripcionCtrl = require('../controllers/inscripcion.controllers');

router.get('/', inscripcionCtrl.getInscripciones);
router.post('/', inscripcionCtrl.createInscripcion);
router.get('/:id', inscripcionCtrl.getInscripcion);
router.put('/:id', inscripcionCtrl.editInscripcion);
router.delete('/:id', inscripcionCtrl.deleteInscripcion);

module.exports = router;