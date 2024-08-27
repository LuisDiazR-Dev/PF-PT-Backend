const { Condominium } = require('../models') // Asegúrate de que las rutas sean correctas

const deleteCondominium = async (req, res) => {
	try {
		const { condominiumId, adminId } = req.body

		if (adminId && condominiumId) {
			// Verificar si el condominio existe
			const condominium = await Condominium.findByPk(condominiumId)
			if (!condominium) {
				return res.status(404).json({ message: 'Condominium not found' })
			}

			// Verificar si el adminId corresponde al administrador de ese condominio
			if (condominium.adminId !== adminId) {
				return res
					.status(403)
					.json({
						message: 'You are not authorized to delete this condominium',
					})
			}
			// Eliminar el condominio
			await Condominium.destroy({ where: { id: condominiumId } })

			return res
				.status(200)
				.json({ message: 'Condominium deleted successfully' })
		} else {
			return res
				.status(400)
				.json({ message: 'Todos los campos son obligatorios' })
		}
	} catch (error) {
		return res
			.status(500)
			.json({ message: 'An error occurred', error: error.message })
	}
}

module.exports = deleteCondominium
