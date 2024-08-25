const {
	createResidentService,
	getResidentsService,
	getResidentByIdService,
	updateResidentService,
	deleteResidentService,
} = require('../services/residentsServices')
const catchAsync = require('../utils/catchAsync.js')

const createResident = async (req, res) => {
	const newResident = await createResidentService(req.body)
	res.status(201).json({
		message: 'Residente creado exitosamente',
		resident: newResident,
	})
}

const getAllResidents = async (req, res) => {
	const residents = await getResidentsService()
	res.status(200).json(residents)
}

const getResidentById = async (req, res) => {
	const residentById = await getResidentByIdService(req.params.id)
	res.status(200).json(residentById)
}

const updateResident = async (req, res) => {
	const updatedResident = await updateResidentService(req.params.id, req.body)
	res.status(200).json({
		message: 'Residente actualizado correctamente',
		resident: updatedResident,
	})
}

const deleteResident = async (req, res) => {
	await deleteResidentService(req.params.id)
	res.status(200).json({ message: 'Residente desactivado exitosamente' })
}

module.exports = {
	createResident: catchAsync(createResident),
	getAllResidents: catchAsync(getAllResidents),
	getResidentById: catchAsync(getResidentById),
	updateResident: catchAsync(updateResident),
	deleteResident: catchAsync(deleteResident),
}
