const router = require('express').Router()

const {
	getAllApartaments,
	postApartaments,
	dataComplete,
} = require('../controllers/apartaments')

router.post('/apartaments', dataComplete, postApartaments)
router.get('/apartaments', getAllApartaments)

module.exports = router
