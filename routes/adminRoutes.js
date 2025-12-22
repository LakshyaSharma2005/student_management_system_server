const express = require('express');
const router = express.Router();
const { addStudent, getAllStudents } = require('../controllers/adminController');

// 1. Route to add a new student
router.post('/add-student', addStudent);

// 2. Route to get all registered students for the table
router.get('/students', getAllStudents);

// 3. Test route
router.get('/test', (req, res) => res.send("Admin route working"));

module.exports = router;