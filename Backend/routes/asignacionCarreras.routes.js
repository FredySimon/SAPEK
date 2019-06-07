const express = require('express');
const router = express.Router();
const asignacionCarrerasCtrl = require('../controllers/asignacionCarreras.controllers');

router.get('/', asignacionCarrerasCtrl.getAsignacionesC);
router.post('/', asignacionCarrerasCtrl.createAsignacionC);
router.get('/:id', asignacionCarrerasCtrl.getAsignacionC);
router.put('/:id', asignacionCarrerasCtrl.editASignacionC);
router.delete('/:id', asignacionCarrerasCtrl.deleteASignacionC);

module.exports = router;