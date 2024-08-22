const { Admin } = require('../db')

const createAdminService = async (data) => {
	const { username, password, email } = data

	const existingAdmin = await Admin.findOne({ where: { email: email } })
	if (existingAdmin) throw new Error('El administrador ya existe')

	return await Admin.create({
		username: username,
		password: password, //ver como cifrar en produccion
		email: email,
	})
}

const getAllAdminsService = async () => {
	return await Admin.findAll({ where: { isActive: true } })
}

const getAdminByNameService = async (username) => {
	const admin = await Admin.findOne({
		where: { username: username, isActive: true },
	})
	if (!admin) throw new Error('Administrador no encontrado')
	return admin
}

const getAdminByIdService = async (id) => {
	const admin = await Admin.findOne({ where: { id: id, isActive: true } })
	if (!admin) throw new Error('Administrador no encontrado')
	return admin
}

const updateAdminService = async (id, data) => {
	const [updated] = await Admin.update(data, { where: { id }, returning: true })
	if (!updated) throw new Error('Administrador no encontrado')
	return updated
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
