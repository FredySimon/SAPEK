const express = require('express');
const router = express.Router();
const asignacionRedCtrl = require('../controllers/asignacionRed.controllers');

router.get('/', asignacionRedCtrl.getAsignacionesRed);
router.post('/', asignacionRedCtrl.createAsignacionRed);
router.get('/:id', asignacionRedCtrl.getAsignacionRed);
router.put('/:id', asignacionRedCtrl.editAsignacionRed);
router.delete('/:id', asignacionRedCtrl.deleteAsignacionRed);

module.exports = router;