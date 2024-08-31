const { Admin } = require('../db')

const createAdminService = async (data) => {
	const { username, password, email, SuscriptionId, imageUrl } = data

	const existingAdmin = await Admin.findOne({ where: { email: email } })
	if (existingAdmin) throw new Error('El administrador ya existe')

	return await Admin.create({
		username: username,
		password: password, //ver como cifrar
		email: email,
		SuscriptionId,
		imageUrl,
	})
}

const getAllAdminsService = async () => {
	const admins = await Admin.findAll()
	if (!admins) throw new Error('No se se encontraron administradores')
	return admins
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
	const {
		username,
		password, //ver como cifrar
		email,
		imageUrl,
		isActive,
		SuscriptionId,
	} = data

	const userAdmin = await Admin.findByPk(id)
	if (!userAdmin) throw new Error('Admin no existe')

	const [rowsUpdated, [updatedAdmin]] = await Admin.update(
		{ username, password, email, imageUrl, isActive, SuscriptionId },
		{ where: { id }, returning: true }
	)

	if (!rowsUpdated === 0) throw new Error('Administrador no encontrado')

	return updatedAdmin
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
