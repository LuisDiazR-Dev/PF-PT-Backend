const { Router } = require('express')
const commonAreaController = require('../controllers/commonAreaController')

const router = Router()

router.post('/', commonAreaController.createCommonArea)
router.get('/', commonAreaController.getAllCommonAreas)
router.get('/:id', commonAreaController.getCommonAreaById)
router.put('/:id', commonAreaController.updateCommonArea)
router.delete('/:id', commonAreaController.deleteCommonArea)

module.exports = router
