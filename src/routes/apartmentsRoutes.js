const { Router } = require('express')
const apartmentController = require('../controllers/apartmentsController.js')

const router = Router()

router.post('/', apartmentController.createApartment)
router.get('/', apartmentController.getAllApartments)
router.get('/:id', apartmentController.getApartmentById)
router.put('/:id', apartmentController.updateApartment)
router.delete('/:id', apartmentController.deleteApartment)

module.exports = router
