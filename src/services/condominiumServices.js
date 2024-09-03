const { Condominium, Admin, CommonAreas } = require('../db')

const createCondominiumService = async (data) => {
	const {
		condominium_name,
		condominium_country,
		condominium_state,
		condominium_logo,
		condominiums_apartments_number,
		isActive,
		imageUrl,
		AdminId,
	} = data

	return await Condominium.create({
		condominium_name,
		condominium_country,
		condominium_state,
		condominium_logo,
		condominiums_apartments_number,
		isActive,
		AdminId,
		imageUrl,
	})
}

const getAllCondominiumService = async () => {
	return await Condominium.findAll({
		where: {
			isActive: true, // Asegura que solo se obtengan condominios activos
		},
	})
}

const getCondominiumImageService = async () => {
	return await Condominium.findAll({
		attributes: ['condominium_logo', 'imageUrl'],
	})
}

const updateCondominiumService = async (id, data) => {
	const {
		condominium_name,
		condominium_country,
		condominium_state,
		condominium_logo,
		condominiums_apartments_number,
		isActive,
		AdminId,
		imageUrl,
	} = data

	const condominium = await Condominium.findByPk(id)
	if (!condominium) throw new Error('Condominio no encontrado')

	const admin = await Admin.findByPk(AdminId)
	if (!admin) throw new Error('El administrador no existe')

	return await condominium.update({
		condominium_name,
		condominium_country,
		condominium_state,
		condominium_logo,
		condominiums_apartments_number,
		isActive,
		imageUrl,
		AdminId,
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
