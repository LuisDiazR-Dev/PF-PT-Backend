const {
	createCommonAreaService,
	getAllCommonAreasService,
	getCommonAreaByIdService,
	updateCommonAreaService,
	deleteCommonAreaService,
} = require('../services/commonAreaServices')
const catchAsync = require('../utils/catchAsync')

const createCommonArea = async (req, res) => {
	const newCommonArea = await createCommonAreaService(req.body)
	res.status(201).json({
		message: 'Área común creada exitosamente',
		commonArea: newCommonArea,
	})
}

const getAllCommonAreas = async (req, res) => {
	const commonAreas = await getAllCommonAreasService()
	res.status(200).json(commonAreas)
}

const getCommonAreaById = async (req, res) => {
	const commonArea = await getCommonAreaByIdService(req.params.id)
	res.status(200).json(commonArea)
}

const updateCommonArea = async (req, res) => {
	const updatedCommonArea = await updateCommonAreaService(
		req.params.id,
		req.body
	)
	res.status(200).json({
		message: 'Área común actualizada exitosamente',
		commonArea: updatedCommonArea,
	})
}

const deleteCommonArea = async (req, res) => {
	await deleteCommonAreaService(req.params.id)
	res.status(200).json({
		message: 'Área común eliminada exitosamente',
	})
}

module.exports = {
	createCommonArea: catchAsync(createCommonArea),
	getAllCommonAreas: catchAsync(getAllCommonAreas),
	getCommonAreaById: catchAsync(getCommonAreaById),
	updateCommonArea: catchAsync(updateCommonArea),
	deleteCommonArea: catchAsync(deleteCommonArea),
}
