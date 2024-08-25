const {
	createSuscriptionService,
	getAllActiveSuscriptionsService,
} = require('../services/suscriptionsServices')
const catchAsync = require('../utils/catchAsync')

const createSuscription = async (req, res) => {
	const newSuscription = await createSuscriptionService(req.body)
	res.status(201).json({
		message: 'Suscripción creada exitosamente',
		suscription: newSuscription,
	})
}

const getAllSuscriptions = async (req, res) => {
	const suscriptions = await getAllActiveSuscriptionsService()
	res.status(200).json(suscriptions)
}

module.exports = {
	createSuscription: catchAsync(createSuscription),
	getAllSuscriptions: catchAsync(getAllSuscriptions),
}
