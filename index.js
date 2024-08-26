require('dotenv').config()
const server = require('./src/server.js')
const { conn } = require('./src/db.js')
const { PORT } = process.env
const seedData = require('./src/seeders/seed-data')

conn
	.sync({ alter: true })
	.then(async () => {
		await seedData()
		server.listen(PORT, () => {
			console.log(`Server listening on port ${PORT}`)
		})
	})
	.catch((error) => console.error(error))
