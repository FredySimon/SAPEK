const express = require('express');
const router = express.Router(); 

//Controllador
const unidadCtrl = require('../controllers/unidad.controllers');

router.get('/', unidadCtrl.getUnidades);
router.post('/', unidadCtrl.createUnidad);
router.get('/:id', unidadCtrl.getUnidad);
router.put('/:id', unidadCtrl.editUnidad);
router.delete('/:id', unidadCtrl.deleteUnidad);

module.exports = router;