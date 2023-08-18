const { Router } = require('express')
const { fetchAllStudents, fetchStudentById, createStudent, updateFee, deleteStudent } = require('../controller/students.controller')

const router = Router()

router.get('/students', fetchAllStudents)
router.get('/student/:id', fetchStudentById)
router.post('/student', createStudent)
router.put('/student/:id', updateFee)
router.delete('/student:/id', deleteStudent)

module.exports = router;