const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controllers');

router.get('/', usuarioCtrl.getUsuarios);
router.post('/', usuarioCtrl.createUsuario);
router.get('/:id', usuarioCtrl.getUsuario);
router.put('/:id', usuarioCtrl.editUsuario);
router.delete('/:id', usuarioCtrl.deleteUsuario);

module.exports = router;