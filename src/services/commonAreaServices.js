const { CommonArea, Condominium } = require('../db')

const createCommonAreaService = async (data) => {
	const {
		area_name,
		description,
		capacity,
		availability,
		imageUrl,
		condominium_name,
		CondominiumId,
		AdminId,
	} = data

	const condominium = await Condominium.findByPk(CondominiumId)
	if (!condominium) throw new Error('Condominio no encontrado')

	return await CommonArea.create({
		area_name,
		description,
		capacity,
		availability,
		imageUrl,
		AdminId,
		condominium_name,
		CondominiumId,
	})
}

const getAllCommonAreasService = async () => {
	return await CommonArea.findAll({
		include: [{ model: Condominium, attributes: ['id'] }],
	})
}

const getCommonAreaByIdService = async (id) => {
	const commonArea = await CommonArea.findByPk(id, {
		include: [{ model: Condominium }],
	})
	if (!commonArea) throw new Error('Área común no encontrada')
	return commonArea
}

const updateCommonAreaService = async (id, data) => {
	const {
		area_name,
		description,
		capacity,
		availability,
		imageUrl,
		CondominiumId,
		condominium_name,
		AdminId,
	} = data

	const commonArea = await CommonArea.findByPk(id)
	if (!commonArea) throw new Error('Área común no encontrada')

	if (CondominiumId) {
		const condominium = await Condominium.findByPk(CondominiumId)
		if (!condominium) throw new Error('Condominio no encontrado')
	}
	return await commonArea.update({
		area_name,
		description,
		capacity,
		availability,
		imageUrl,
		AdminId,
		condominium_name,
		CondominiumId,
	})
}

const deleteCommonAreaService = async (id) => {
	const commonArea = await CommonArea.findByPk(id)
	if (!commonArea) throw new Error('Área común no encontrada')
	return await commonArea.update({ isActive: false })
}

module.exports = {
	createCommonAreaService,
	getAllCommonAreasService,
	getCommonAreaByIdService,
	updateCommonAreaService,
	deleteCommonAreaService,
}
