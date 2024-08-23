const {
	createApartmentService,
	getApartmentsService,
	getApartmentsByIdService,
	updateApartmentService,
	deleteApartmentService,
} = require('../services/apartmentServices.js')
const catchAsync = require('../utils/catchAsync.js')

const createApartment = async (req, res) => {
	const newApartment = await createApartmentService(req.body)
	res.status(201).json({
		message: 'Apartamento creado exitosamente',
		apartment: newApartment,
	})
}

const getAllApartments = async (req, res) => {
	const apartments = await getApartmentsService()
	res.status(200).json(apartments)
}

const getApartmentById = async (req, res) => {
	const apartmentById = await getApartmentsByIdService(req.params.id)
	res.status(200).json(apartmentById)
}

const updateApartment = async (req, res) => {
	const updatedApartment = await updateApartmentService(req.params.id, req.body)
	res.status(200).json({
		message: 'Apartamento actualizado correctamente',
		apartment: updatedApartment,
	})
}

const deleteApartment = async (req, res) => {
	await deleteApartmentService(req.params.id)
	res.status(200).json({ message: 'Apartamento desactivado exitosamente' })
}

module.exports = {
	createApartment: catchAsync(createApartment),
	getAllApartments: catchAsync(getAllApartments),
	getApartmentById: catchAsync(getApartmentById),
	updateApartment: catchAsync(updateApartment),
	deleteApartment: catchAsync(deleteApartment),
}

// const { Apartments } = require('../db.js')
// const dataComplete = async (req, res, next) => {
// 	const { id, building, numberApt, size, state } = req.body
// 	try {
// 		if (!id || !building || !numberApt || !size || !state) {
// 			return res.status(400).json({ message: 'Datos incompletos' })
// 		}
// 		next()
// 	} catch (error) {
// 		res.status(500).send(error.message)
// 	}
// }

// const getAllApartments = async (req, res) => {
// 	try {
// 		const count = await Apartments.count()
// 		if (count > 0) {
// 			const allApartments = await Apartments.findAll()
// 			return res.status(200).json(allApartments)
// 		} else {
// 			return res
// 				.status(400)
// 				.json({ message: 'no se ha registrado ningún apartamento' })
// 		}
// 	} catch (error) {
// 		console.error('Error al obtener los apartamentos', error)
// 		return res.status(500).send(error.message)
// 	}
// }

// const postApartments = async (req, res) => {
// 	const { id, building, numberApt, size, state } = req.body
// 	try {
// 		const apartamentsExist = await Apartments.findByPk(id)

// 		if (apartamentsExist) {
// 			return res.status(409).json({
// 				error: 'Este apartamento ya ha sido registrado',
// 			})
// 		} else {
// 			const apartments = await Apartments.create({
// 				id,
// 				building,
// 				numberApartament: numberApt,
// 				size,
// 				state,
// 			})
// 			return res.status(201).json(apartments)
// 		}
// 	} catch (error) {
// 		console.error('Error al registrar el apartamento:', error)
// 		return res.status(500).send('Error interno del servidor')
// 	}
// }

// module.exports = {
// 	getAllApartments,
// 	postApartments,
// 	dataComplete,
// }
