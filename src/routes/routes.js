const { Router } = require('express')

const router = Router()

router.get('/students')
router.get('/student/:id')
router.post('/student')
router.put('/student/:id')
router.delete('/student:/id')

module.exports = router;