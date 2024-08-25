const { Condominium, Admin } = require('../db')

const createCondominiumService = async (data) => {
	const { name, country, state, logo, apartmentsNumber, adminId } = data

	if (!name || !country || !state) {
		throw new Error('Nombre, país y estado del condominio son obligatorios')
	}

	const admin = await Admin.findByPk(adminId)
	if (!admin) throw new Error('El administrador no existe')

	const existingCondominium = await Condominium.findOne({
		where: {
			condominium_name: name,
			condominium_country: country,
			condominium_state: state,
		},
	})

	if (existingCondominium) throw new Error('El condominio ya existe')

	return await Condominium.create({
		condominium_name: name,
		condominium_country: country,
		condominium_state: state,
		condominium_logo: logo,
		condominiums_apartments_number: apartmentsNumber,
		AdminId: adminId,
	})
}

const getAllCondominiumService = async () => {
	return await Condominium.findAll({
		include: [{ model: Admin, attributes: ['username', 'email'] }],
	})
}

const getCondominiumImageService = async () => {
	return await Condominium.findAll({
		attributes: ['condominium_logo'],
	})
}

const updateCondominiumService = async (id, data) => {
	const { name, country, state, logo, apartmentsNumber, adminId } = data

	const condominium = await Condominium.findByPk(id)
	if (!condominium) throw new Error('Condominio no encontrado')

	const admin = await Admin.findByPk(adminId)
	if (!admin) throw new Error('El administrador no existe')

	return await condominium.update({
		condominium_name: name,
		condominium_country: country,
		condominium_state: state,
		condominium_logo: logo,
		condominiums_apartments_number: apartmentsNumber,
		AdminId: adminId,
	})
}

const getCondominiumByIdService = async (id) => {
	const condominium = await Condominium.findOne({
		where: {
			id,
			isActive: true, // Asegura que solo se obtengan condominios activos
		},
	})
	if (!condominium) throw new Error('Condominio no encontrado')
	return condominium
}

const deleteCondominiumService = async (id) => {
	const condominium = await Condominium.findByPk(id)
	if (!condominium) throw new Error('Condominio no encontrado')
	return await condominium.update({ isActive: false })
}

module.exports = {
	createCondominiumService,
	getAllCondominiumService,
	getCondominiumImageService,
	updateCondominiumService,
	getCondominiumByIdService,
	deleteCondominiumService,
}
