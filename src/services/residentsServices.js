const { Resident, Condominium, Apartment } = require('../db')

const createResidentService = async (data) => {
	const {
		name,
		email,
		vehicle_plate,
		pet,
		registration_date,
		isActive,
		CondominiumId,
		ApartmentId: id,
		AdminId,
	} = data

	return await Resident.create({
		name,
		email,
		vehicle_plate,
		pet,
		registration_date,
		isActive,
		CondominiumId,
		ApartmentId: id,
		AdminId,
	})
}

const getResidentsService = async () => {
	return await Resident.findAll({
		include: [{ model: Condominium, attributes: ['id'] }],
	})
}

const getResidentByIdService = async (id) => {
	const resident = await Resident.findOne({
		where: {
			id,
			isActive: true,
		},
		include: [{ model: Condominium }],
	})
	if (!resident) throw new Error('Residente no encontrado')
	return resident
}

const updateResidentService = async (id, data) => {
	const {
		name,
		email,
		vehicle_plate,
		pet,
		registration_date,
		isActive,
		CondominiumId,
		ApartmentId,
		AdminId,
	} = data

	const resident = await Resident.findByPk(id)
	if (!resident) throw new Error('Residente no encontrado')

	const apartment = await Apartment.findOne({
		where: {
			status: 'Disponible',
		},
	})
	if (!apartment) throw new Error('El apartamento no está disponible')

	return await resident.update({
		name,
		email,
		vehicle_plate,
		pet,
		registration_date,
		isActive,
		CondominiumId,
		ApartmentId,
		AdminId,
	})
}

const deleteResidentService = async (id) => {
	const resident = await Resident.findByPk(id)
	if (!resident) throw new Error('Residente no encontrado')
	return await resident.update({ isActive: false })
}

module.exports = {
	createResidentService,
	getResidentsService,
	getResidentByIdService,
	updateResidentService,
	deleteResidentService,
}
