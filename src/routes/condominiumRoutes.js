const { Router } = require('express')
const condominiumController = require('../controllers/condominiumController.js')

const router = Router()

router.post('/', condominiumController.createCondominium)

module.exports = router
