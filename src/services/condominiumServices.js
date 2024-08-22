const { Condominium, Admin } = require('../db')

const createCondominiumService = async (data) => {
	const { name, country, state, logo, apartmentsNumber, adminId } = data

	const existingCondominium = await Condominium.findOne({
		where: {
			condominium_name: name,
			condominium_country: country,
			condominium_state: state,
		},
	})

	if (existingCondominium) throw new Error('El condominio ya existe')

	const admin = await Admin.findByPk(adminId)
	if (!admin) throw new Error('El administrador no existe')

	return await Condominium.create({
		condominium_name: name,
		condominium_country: country,
		condominium_state: state,
		condominium_logo: logo,
		condominiums_apartments_number: apartmentsNumber,
		AdminId: adminId,
	})
}

module.exports = { createCondominiumService }
