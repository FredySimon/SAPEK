const express = require('express');
const router = express.Router();
const personaCtrl = require('../controllers/persona.controllers');

router.get('/', personaCtrl.getPersonas);
router.post('/', personaCtrl.createPersona);
router.get('/:id', personaCtrl.getPersona);
router.put('/:id', personaCtrl.editPersona);
router.delete('/:id', personaCtrl.deletePersona);

module.exports = router;