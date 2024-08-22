const router = require('express').Router()

const {
	getAllApartments,
	postApartments,
	dataComplete,
} = require('../controllers/apartments')

router.post('/apartments', dataComplete, postApartments)
router.get('/apartments', getAllApartments)

module.exports = router
