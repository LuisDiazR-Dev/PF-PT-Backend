const router = require('express').Router()

const {
	getAllApartaments,
	postApartaments,
	dataComplete,
} = require('../controllers/apartaments')

router.post('/apartamentos', dataComplete, postApartaments)
router.get('/apartamentos', getAllApartaments)

module.exports = router
