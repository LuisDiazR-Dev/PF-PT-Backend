require('dotenv').config()
const server = require('./src/server.js')
const { conn } = require('./src/db.js')
const { PORT } = process.env

// const loadInitialData = require('./src/_seeders/z_index.js');

conn
	.sync({ alter: true })
	.then(async () => {
		server.listen(PORT, () => {
			console.log(`Server listening on port ${PORT}`)
			// loadInitialData()
		})
	})
	.catch((error) => console.error(error))

// require('dotenv').config()
// const server = require('./src/server.js')
// const { conn } = require('./src/db.js')
// const { PORT } = process.env

// conn
// 	.sync({ alter: true })
// 	.then(async () => {
// 		server.listen(PORT, () => {
// 			console.log(`Server listening on port ${PORT}`)
// 		})
// 	})
// 	.catch((error) => console.error(error))
