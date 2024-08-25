const { Resident, Condominium } = require('../db')

const createResidentService = async (data) => {
	const {
		name,
		email,
		vehicle,
		pet,
		registration_date,
		isActive,
		condominiumId,
	} = data

	const condominium = await Condominium.findByPk(condominiumId)
	if (!condominium) throw new Error('El Condominio no existe')

	return await Resident.create({
		name,
		email,
		vehicle,
		pet,
		registration_date,
		isActive,
		CondominiumId: condominiumId,
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
		vehicle,
		pet,
		registration_date,
		isActive,
		condominiumId,
	} = data

	const resident = await Resident.findByPk(id)
	if (!resident) throw new Error('Residente no encontrado')

	if (condominiumId) {
		const condominium = await Condominium.findByPk(condominiumId)
		if (!condominium) throw new Error('El Condominio no existe')
	}

	return await resident.update({
		name,
		email,
		vehicle,
		pet,
		registration_date,
		isActive,
		CondominiumId: condominiumId,
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
