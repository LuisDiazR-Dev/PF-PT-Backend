const {
	createCondominiumService,
} = require('../services/condominiumServices.js')
const catchAsync = require('../utils/catchAsync')

const createCondominium = async (req, res) => {
	const newCondominium = await createCondominiumService(req.body)
	res.status(201).json({
		message: 'Condominio creado exitosamente',
		condominium: newCondominium,
	})
}
module.exports = {
	createCondominium: catchAsync(createCondominium),
}
