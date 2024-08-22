const { createAdminService } = require('../services/adminServices')
const catchAsync = require('../utils/catchAsync')

const createAdmin = async (req, res) => {
	const newAdmin = await createAdminService(req.body)
	res.status(201).json({
		message: 'Administrador creado exitosamente',
		admin: newAdmin,
	})
}

module.exports = {
	createAdmin: catchAsync(createAdmin),
}
