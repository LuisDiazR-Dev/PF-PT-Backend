const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Admin } = require('../db')

const { sendWelcomeEmail } = require('../emailService'); // Asegúrate de que la ruta sea correcta

const createAdminService = async (data) => {
	const { username, password, email, SuscriptionId, imageUrl } = data

	const existingAdmin = await Admin.findOne({ where: { email } })
	if (existingAdmin) throw new Error('El administrador ya existe')

	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	const newAdmin = await Admin.create({
		username,
		password: hashedPassword,
		email,
		SuscriptionId,
		imageUrl,
	})

	const payload = {
		admin: {
			id: newAdmin.id,
			email: newAdmin.email,
		},
	}

	const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })

	// Envía el correo electrónico de bienvenida
	sendWelcomeEmail(email);

	return { newAdmin, token }
}

const getAllAdminsService = async () => {
	return await Admin.findAll()
}

const getAdminByNameService = async (username) => {
	const admin = await Admin.findOne({
		where: { username, isActive: true },
	})
	if (!admin) throw new Error('Administrador no encontrado')
	return admin
}

const getAdminByIdService = async (id) => {
	const admin = await Admin.findOne({ where: { id } })
	if (!admin) throw new Error('Administrador no encontrado')
	return admin
}

const updateAdminService = async (id, data) => {
	const { username, password, email, imageUrl, isActive, SuscriptionId } = data

	const userAdmin = await Admin.findByPk(id)
	if (!userAdmin) throw new Error('Admin no existe')

	if (password) {
		const salt = await bcrypt.genSalt(10)
		userAdmin.password = await bcrypt.hash(password, salt)
	}

	userAdmin.username = username || userAdmin.username
	userAdmin.email = email || userAdmin.email
	userAdmin.imageUrl = imageUrl || userAdmin.imageUrl
	userAdmin.isActive = isActive !== undefined ? isActive : userAdmin.isActive
	userAdmin.SuscriptionId = SuscriptionId || userAdmin.SuscriptionId

	await userAdmin.save()
	return userAdmin
}

const deleteAdminService = async (id) => {
	const admin = await Admin.findByPk(id)
	if (!admin) throw new Error('Administrador no encontrado')
	admin.isActive = false
	await admin.save()
}

module.exports = {
	createAdminService,
	getAllAdminsService,
	getAdminByNameService,
	getAdminByIdService,
	updateAdminService,
	deleteAdminService,
}
