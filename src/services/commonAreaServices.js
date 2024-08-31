const { CommonArea, Condominium, Admin } = require('../db')

const createCommonAreaService = async (data) => {
	const {
		area_name,
		description,
		capacity,
		availability,
		imageUrl,
		condominium_name,
		AdminId,
		CondominiumId,
	} = data

	const existingCommonArea = await CommonArea.findOne({
		where: { area_name: area_name },
	})
	if (existingCommonArea) throw new Error('El área común ya existe')

	return await CommonArea.create({
		area_name,
		description,
		capacity,
		availability,
		imageUrl,
		condominium_name,
		AdminId,
		CondominiumId,
	})
}

const getAllCommonAreasService = async () => {
	return await CommonArea.findAll({
		include: [{ model: Condominium, attributes: ['condominium_name'] }],
	})
}

const getCommonAreaByIdService = async (id) => {
	const commonArea = await CommonArea.findByPk(id, {
		include: [{ model: Condominium, attributes: ['condominium_name'] }],
	})
	if (!commonArea) throw new Error('Área común no encontrada')
	return commonArea
}

const updateCommonAreaService = async (id, data) => {
	const commonArea = await CommonArea.findOne({
		where: {
			id,
			isActive: true,
		},
	})
	if (!commonArea) throw new Error('Área común no encontrada')

	const {
		area_name,
		description,
		capacity,
		availability,
		imageUrl,
		condominium_name,
	} = data

	const areaName = await CommonArea.findOne({
		where: {
			area_name: 'area_name',
		},
	})
	if (!areaName) throw new Error('Area ya existe')

	return await commonArea.update({
		area_name,
		description,
		capacity,
		availability,
		imageUrl,
		condominium_name,
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
