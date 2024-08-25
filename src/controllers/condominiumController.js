const {
	createCondominiumService,
	getAllCondominiumService,
	getCondominiumImageService,
	updateCondominiumService,
	getCondominiumByIdService,
	deleteCondominiumService,
} = require('../services/condominiumServices.js')
const catchAsync = require('../utils/catchAsync')

const createCondominium = async (req, res) => {
	const newCondominium = await createCondominiumService(req.body)
	res.status(201).json({
		message: 'Condominio creado exitosamente',
		condominium: newCondominium,
	})
}

const getAllCondominiums = async (req, res) => {
	const condominiums = await getAllCondominiumService()
	res.status(200).json(condominiums)
}

const getCondominiumImage = async (req, res) => {
	const images = await getCondominiumImageService()
	res.status(200).json(images)
}

const updateCondominium = async (req, res) => {
	const updatedCondominium = await updateCondominiumService(
		req.params.id,
		req.body
	)
	res.status(200).json({
		message: 'Condominio actualizado correctamente',
		condominium: updatedCondominium,
	})
}

const getCondominiumById = async (req, res) => {
	const condominiumById = await getCondominiumByIdService(req.params.id)
	res.status(200).json(condominiumById)
}

const deleteCondominium = async (req, res) => {
	await deleteCondominiumService(req.params.id)
	res.status(200).json({ message: 'Condominio desactivado exitosamente' })
}

module.exports = {
	createCondominium: catchAsync(createCondominium),
	getAllCondominiums: catchAsync(getAllCondominiums),
	getCondominiumImage: catchAsync(getCondominiumImage),
	updateCondominium: catchAsync(updateCondominium),
	getCondominiumById: catchAsync(getCondominiumById),
	deleteCondominium: catchAsync(deleteCondominium),
}
