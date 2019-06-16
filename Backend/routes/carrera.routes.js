const express = require('express');
const router = express.Router();
const carreraCtrl = require('../controllers/carrera.controllers');

router.get('/', carreraCtrl.getCarreras);
router.post('/', carreraCtrl.createCarrera);
router.get('/:id', carreraCtrl.getCarrera);
router.put('/:id', carreraCtrl.editCarrera);
router.delete('/:id', carreraCtrl.deleteCarrera);

module.exports = router;