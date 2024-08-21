const router = require('express').Router()

const {
	getAllApartaments,
	postApartaments,
	dataComplete,
} = require('../controllers/apartaments')

router.post('/apartments', dataComplete, postApartaments)
router.get('/apartments', getAllApartaments)

module.exports = router
