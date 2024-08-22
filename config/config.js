require('dotenv').config() // Carga las variables de entorno desde el archivo .env

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: 'postgres',
	},
	test: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: 'database_test',
		host: process.env.DB_HOST,
		dialect: 'postgres',
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: 'database_production',
		host: process.env.DB_HOST,
		dialect: 'postgres',
	},
}
