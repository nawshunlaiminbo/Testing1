const express = require('express');
const router = express.Router();
const studentController= require('../controllers/StudentController');

router.get('/list',studentController.getAllStudents);
router.post('/add',studentController.addStudent);

module.exports = router;