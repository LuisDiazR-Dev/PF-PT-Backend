const { Router } = require('express')
const suscriptionsController = require('../controllers/suscriptionsController')

const router = Router()

router.post('/', suscriptionsController.createSuscription)
router.get('/', suscriptionsController.getAllSuscriptions)

module.exports = router
