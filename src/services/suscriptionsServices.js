const { Suscription } = require('../db')

const createSuscriptionService = async (data) => {
	const { name, plan_price } = data
	return await Suscription.create({
		name,
		plan_price,
		isActive: true,
	})
}

const getAllActiveSuscriptionsService = async () => {
	return await Suscription.findAll({ where: { isActive: true } })
}

module.exports = {
	createSuscriptionService,
	getAllActiveSuscriptionsService,
}
