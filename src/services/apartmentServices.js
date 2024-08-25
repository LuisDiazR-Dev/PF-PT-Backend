const { Apartment, Condominium } = require('../db')

const createApartmentService = async (data) => {
	const { numberApartment, size, occupancy, condominiumId } = data

	const condominium = await Condominium.findByPk(condominiumId)
	if (!condominium) throw new Error('El Condominio no existe')

	return await Apartment.create({
		numberApartment,
		size,
		occupancy,
		CondominiumId: condominiumId,
	})
}

const getApartmentsService = async () => {
	return await Apartment.findAll({
		include: [{ model: Condominium, attributes: ['condominium_name'] }],
	})
}

const getApartmentsByIdService = async (id) => {
	const apartment = await Apartment.findOne({
		where: {
			id,
			isActive: true,
		},
	})
	if (!apartment) throw new Error('Apartamento no encontrado')
	return apartment
}

const updateApartmentService = async (id, data) => {
	const { numberApartament, size, occupancy, condominiumId } = data

	const apartment = await Apartment.findByPk(id)
	if (!apartment) throw new Error('Apartamento no encontrado')

	const condominium = await Condominium.findByPk(condominiumId)
	if (!condominium) throw new Error('El condominio no existe')

	return await apartment.update({
		numberApartament,
		size,
		occupancy,
		CondominiumId: condominiumId,
	})
}

const deleteApartmentService = async (id) => {
	const apartment = await Apartment.findByPk(id)
	if (!apartment) throw new Error('Apartamento no encontrado')
	return await apartment.update({ isActive: false })
}

module.exports = {
	createApartmentService,
	getApartmentsService,
	getApartmentsByIdService,
	updateApartmentService,
	deleteApartmentService,
}
