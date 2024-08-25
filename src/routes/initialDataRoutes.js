const { Router } = require('express')
const initialDataController = require('../controllers/initialDataController')

const router = Router()

router.get('/initial-data', initialDataController.getInitialData)

module.exports = router
