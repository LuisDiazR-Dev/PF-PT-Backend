require('dotenv').config()
const { Sequelize } = require('sequelize')

const fs = require('fs')
const path = require('path')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
	{
		logging: false,
		native: false,
	}
)
const basename = path.basename(__filename)

const modelDefiners = []

fs.readdirSync(path.join(__dirname, '/models'))
	.filter(
		(file) =>
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, '/models', file)))
	})

modelDefiners.forEach((model) => model(sequelize))

let entries = Object.entries(sequelize.models)
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
])
sequelize.models = Object.fromEntries(capsEntries)

const { Apartment, Payment, Admin, CommonArea, Condominium, Notification, Resident, Suscription } = sequelize.models

// Aca vendrian las relaciones

// Un administrador puede gestionar hasta 2 condominios y un condominio puede ser gestionado por un administrador.
Admin.hasMany(Condominium)
Condominium.belongsTo(Admin)

// Un administrador puede registrar y gestionar múltiples residentes y un residente puede ser gestionado por un administrador.
Admin.hasMany(Resident)
Resident.belongsTo(Admin)

// Un administrador puede enviar múltiples notificaciones y una notificación es enviada por un solo administrador.
Admin.hasMany(Notification)
Notification.belongsTo(Admin)

// Un condominio puede tener múltiples residentes asociados y un residente está asociado a un solo condominio.
Condominium.hasMany(Resident)
Resident.belongsTo(Condominium)

// Un condominio puede tener múltiples apartamentos y un apartamento pertenece a un solo condominio.
Condominium.hasMany(Apartment)
Apartment.belongsTo(Condominium)

// Un condominio puede tener múltiples áreas comunes y un área común pertenece a un solo condominio.
Condominium.hasMany(CommonArea)
CommonArea.belongsTo(Condominium)

// Un residente puede realizar múltiples reservas de áreas comunes y una reserva puede ser realizada por un residente.
Resident.hasMany(CommonArea)
CommonArea.belongsTo(Resident)

// Un administrador tiene una suscripción y una suscripción está asociada a varios administradores.
Admin.belongsTo(Suscription)
Suscription.hasMany(Admin)

// Un pago puede estar hecho por un solo residente y un residente puede hacer varios pagos.
Payment.belongsTo(Resident)
Resident.hasMany(Payment)

// Un residente puede recibir múltiples notificaciones y una notificación puede ser enviada a múltiples residentes.
Resident.belongsToMany(Notification, {
	through: "notification_resident",
	timestamps: false,
});

Notification.belongsToMany(Resident, {
	through: "resident_notification",
	timestamps: false,
});

module.exports = {
	...sequelize.models,
	conn: sequelize, // para importart la conexión { conn } = require('./db.js');
}
