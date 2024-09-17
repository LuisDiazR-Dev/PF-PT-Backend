const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Admin } = require('../db')

const authenticateAdminService = async (email, password) => {
	// Buscar el administrador en la base de datos
	const admin = await Admin.findOne({ where: { email, isActive: true } })
	if (!admin) throw new Error('Administrador no encontrado')

	// Comparar la contraseña proporcionada con la contraseña almacenada (hasheada)
	const isMatch = await bcrypt.compare(password, admin.password)
	if (!isMatch) throw new Error('Contraseña incorrecta')

	// Crear el payload del token.
	const payload = {
		admin: {
			id: admin.id,
			email: admin.email,
		},
	}

	// Firmar el token JWT
	const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })

	return { admin, token }
}

module.exports = {
	authenticateAdminService,
}