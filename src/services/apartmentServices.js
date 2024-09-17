const { Apartment, Condominium } = require('../db')

const createApartmentService = async (data) => {
	const { numberApartment, size, status, CondominiumId, imageUrl } = data

	const condominium = await Condominium.findByPk(CondominiumId)
	if (!condominium) throw new Error('El Condominio no existe')

	return await Apartment.create({
		numberApartment,
		size,
		status,
		CondominiumId,
		imageUrl,
	})
}

const getApartmentsService = async () => {
	return await Apartment.findAll({
		where: {
			isActive: true,
		},
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
	const { numberApartment, size, status, CondominiumId, imageUrl } = data

	const apartment = await Apartment.findByPk(id)
	if (!apartment) throw new Error('Apartamento no encontrado')

	const condominium = await Condominium.findByPk(CondominiumId)
	if (!condominium) throw new Error('El condominio no existe')

	return await apartment.update({
		numberApartment,
		size,
		status,
		CondominiumId,
		imageUrl,
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
