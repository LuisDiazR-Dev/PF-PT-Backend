const { Router } = require('express')
const condominiumController = require('../controllers/condominiumController.js')

const router = Router()

router.post('/', condominiumController.createCondominium)
router.get('/', condominiumController.getAllCondominiums)
router.get('/images', condominiumController.getCondominiumImage)
router.put('/:id', condominiumController.updateCondominium)
router.get('/:id', condominiumController.getCondominiumById)
router.delete('/:id', condominiumController.deleteCondominium)

module.exports = router
