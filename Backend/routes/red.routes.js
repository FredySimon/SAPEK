const express = require('express');
const router = express.Router();
const redCtrl = require('../controllers/red.controllers');

router.get('/', redCtrl.getRedes);
router.post('/', redCtrl.createRed);
router.get('/:id', redCtrl.getRed);
router.put('/:id', redCtrl.editRed);
router.delete('/:id', redCtrl.deleteRed);

module.exports = router;