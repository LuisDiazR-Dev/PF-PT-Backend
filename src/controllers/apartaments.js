const { Apartaments } = require('../db.js')

const dataComplete = async (req, res, next) => {
	const { id, building, numberApt, size, state } = req.body
	try {
		if (!id || !building || !numberApt || !size || !state) {
			return res.status(400).json({ message: 'Datos incompletos' })
		}
		next()
	} catch (error) {
		res.status(500).send(error.message)
	}
}

const getAllApartaments = async (req, res) => {
	try {
		const count = await Apartaments.count()
		if (count > 0) {
			const allApartaments = await Apartaments.findAll()
			return res.status(200).json(allApartaments)
		} else {
			return res
				.status(400)
				.json({ message: 'no se ha registrado ningú apartamento' })
		}
	} catch (error) {
		console.error('Error al obtener los apartamentos', error)
		return res.status(500).send(error.message)
	}
}

const postApartaments = async (req, res) => {
	const { id, building, numberApt, size, state } = req.body
	try {
		const apartamentsExist = await Apartaments.findByPk(id)

		if (apartamentsExist) {
			return res.status(409).json({
				error: 'Este apartamento ya ha sido registrado',
			})
		} else {
			const apartaments = await Apartaments.create({
				id,
				building,
				numberApartament: numberApt,
				size,
				state,
			})
			return res.status(201).json(apartaments)
		}
	} catch (error) {
		console.error('Error al registrar la iglesia:', error)
		return res.status(500).send('Error interno del servidor')
	}
}

module.exports = {
	getAllApartaments,
	postApartaments,
	dataComplete,
}
