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
const {
	admins,
	apartments,
	payments,
	notifications,
	suscriptions,
	residents,
	commonAreas,
	condominiums,
} = require('../data/intitial-data.json')

const seedData = async () => {
	try {
		// Insertar o actualizar suscripciones
		for (const suscription of suscriptions) {
			await Suscription.upsert(suscription)
		}

		// Insertar o actualizar administradores
		for (const admin of admins) {
			await Admin.upsert(admin)
		}

		// Insertar o actualizar condominios
		for (const condominium of condominiums) {
			await Condominium.upsert(condominium)
		}

		// Insertar o actualizar apartamentos
		for (const apartment of apartments) {
			await Apartment.upsert(apartment)
		}

		// Insertar o actualizar residentes
		for (const resident of residents) {
			await Resident.upsert(resident)
		}

		// Insertar o actualizar áreas comunes
		for (const commonArea of commonAreas) {
			await CommonArea.upsert(commonArea)
		}

		// Insertar o actualizar pagos
		for (const payment of payments) {
			await Payment.upsert(payment)
		}

		// Insertar o actualizar notificaciones
		for (const notification of notifications) {
			await Notification.upsert(notification)
		}

		console.log('Datos iniciales insertados o actualizados exitosamente.')
	} catch (error) {
		console.error('Error al insertar o actualizar datos:', error)
	}
}

module.exports = seedData
