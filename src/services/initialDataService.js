const {
	Admin,
	Apartment,
	Payment,
	Notification,
	Suscription,
	Resident,
	CommonArea,
	Condominium,
} = require('../db')

async function getInitialDataService() {
	const admins = await Admin.findAll()
	const apartments = await Apartment.findAll()
	const payments = await Payment.findAll()
	const notifications = await Notification.findAll()
	const suscriptions = await Suscription.findAll()
	const residents = await Resident.findAll()
	const commonAreas = await CommonArea.findAll()
	const condominiums = await Condominium.findAll()

	return {
		admins,
		apartments,
		payments,
		notifications,
		suscriptions,
		residents,
		commonAreas,
		condominiums,
	}
}

module.exports = { getInitialDataService }
