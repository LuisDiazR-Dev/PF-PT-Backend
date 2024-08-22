const { Apartments } = require('../db.js')

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

const getAllApartments = async (req, res) => {
	try {
		const count = await Apartments.count()
		if (count > 0) {
			const allApartments = await Apartments.findAll()
			return res.status(200).json(allApartments)
		} else {
			return res
				.status(400)
				.json({ message: 'no se ha registrado ningún apartamento' })
		}
	} catch (error) {
		console.error('Error al obtener los apartamentos', error)
		return res.status(500).send(error.message)
	}
}

const postApartments = async (req, res) => {
	const { id, building, numberApt, size, state } = req.body
	try {
		const apartamentsExist = await Apartments.findByPk(id)

		if (apartamentsExist) {
			return res.status(409).json({
				error: 'Este apartamento ya ha sido registrado',
			})
		} else {
			const apartments = await Apartments.create({
				id,
				building,
				numberApartament: numberApt,
				size,
				state,
			})
			return res.status(201).json(apartments)
		}
	} catch (error) {
		console.error('Error al registrar el apartamento:', error)
		return res.status(500).send('Error interno del servidor')
	}
}

module.exports = {
	getAllApartments,
	postApartments,
	dataComplete,
}
