const express = require('express');
const router = express.Router();

//Controllador
const instructorCtrl = require('../controllers/instructor.controllers');

router.get('/', instructorCtrl.getInstructores);
router.post('/', instructorCtrl.createInstructor);
router.get('/:id', instructorCtrl.getInstructor);
router.put ('/:id', instructorCtrl.editInstructor);
router.delete('/:id', instructorCtrl.deleteInstructor);

module.exports = router;