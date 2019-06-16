const express = require('express');
const router = express.Router();
const familiaCtrl = require('../controllers/familia.controllers');

router.get('/', familiaCtrl.getFamilias);
router.post('/', familiaCtrl.createFamilia);
router.get('/:id', familiaCtrl.getFamilia);
router.put('/:id', familiaCtrl.editFamilia);
router.delete('/:id', familiaCtrl.deleteFamilia);

module.exports = router;