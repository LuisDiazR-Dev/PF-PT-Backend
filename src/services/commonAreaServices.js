const { CommonArea, Condominium } = require('../db')

const createCommonAreaService = async (data) => {
	const { area_name, description, capacity, availability, condominiumId } = data

	const condominium = await Condominium.findByPk(condominiumId)
	if (!condominium) throw new Error('Condominio no encontrado')

	return await CommonArea.create({
		area_name,
		description,
		capacity,
		availability,
		CondominiumId: condominiumId,
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
	const { area_name, description, capacity, availability, condominiumId } = data

	const commonArea = await CommonArea.findByPk(id)
	if (!commonArea) throw new Error('Área común no encontrada')

	if (condominiumId) {
		const condominium = await Condominium.findByPk(condominiumId)
		if (!condominium) throw new Error('Condominio no encontrado')
	}
	return await commonArea.update({
		area_name,
		description,
		capacity,
		availability,
		CondominiumId: condominiumId,
	})
}

const deleteCommonAreaService = async (id) => {
	const commonArea = await CommonArea.findByPk(id)
	if (!commonArea) throw new Error('Área común no encontrada')
	return await commonArea.destroy()
}

module.exports = {
	createCommonAreaService,
	getAllCommonAreasService,
	getCommonAreaByIdService,
	updateCommonAreaService,
	deleteCommonAreaService,
}
