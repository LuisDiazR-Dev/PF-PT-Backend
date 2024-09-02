const { authenticateAdminService } = require('../services/authService')
const catchAsync = require('../utils/catchAsync')

const loginAdminController = async (req, res) => {
	const { email, password } = req.body
	const { admin, token } = await authenticateAdminService(email, password)
	res.status(200).json({ admin, token })
}

module.exports = {
	loginAdminController: catchAsync(loginAdminController),
}
