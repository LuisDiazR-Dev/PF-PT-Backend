const {
	createAdminService,
	getAllAdminsService,
	getAdminByNameService,
	getAdminByIdService,
	updateAdminService,
	deleteAdminService,
} = require('../services/adminServices')
const catchAsync = require('../utils/catchAsync')

const createAdmin = async (req, res) => {
	const newAdmin = await createAdminService(req.body)
	res.status(201).json({
		message: 'Administrador creado exitosamente',
		admin: newAdmin,
	})
}

const getAllAdmins = async (req, res) => {
	const admins = await getAllAdminsService()
	res.status(200).json(admins)
}

const getAdminByName = async (req, res) => {
	const admin = await getAdminByNameService(req.params.username)
	res.status(200).json(admin)
}

const getAdminById = async (req, res) => {
	const admin = await getAdminByIdService(req.params.id)
	res.status(200).json(admin)
}

const updateAdmin = async (req, res) => {
	const updatedAdmin = await updateAdminService(req.params.id, req.body)
	res.status(200).json({
		message: 'Administrador actualizado exitosamente',
		admin: updatedAdmin,
	})
}

const deleteAdmin = async (req, res) => {
	await deleteAdminService(req.params.id)
	res.status(200).json({
		message: 'Administrador desactivado exitosamente',
	})
}

module.exports = {
	createAdmin: catchAsync(createAdmin),
	getAllAdmins: catchAsync(getAllAdmins),
	getAdminByName: catchAsync(getAdminByName),
	getAdminById: catchAsync(getAdminById),
	updateAdmin: catchAsync(updateAdmin),
	deleteAdmin: catchAsync(deleteAdmin),
}
