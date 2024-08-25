const { Router } = require('express')
const residentsController = require('../controllers/residentsController')

const router = Router()

router.post('/', residentsController.createResident)
router.get('/', residentsController.getAllResidents)
router.get('/:id', residentsController.getResidentById)
router.put('/:id', residentsController.updateResident)
router.delete('/:id', residentsController.deleteResident)

module.exports = router
