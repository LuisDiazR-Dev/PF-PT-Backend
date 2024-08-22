const { Router } = require('express')
const adminController = require('../controllers/adminController')

const router = Router()

router.post('/', adminController.createAdmin)

module.exports = router
