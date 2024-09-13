const { authenticateAdminService } = require('../services/authService')
const catchAsync = require('../utils/catchAsync')
const jwt = require('jsonwebtoken');

const googleAuthController = async (req, res) => {
    const token = jwt.sign({ id: req.user.id, email: req.user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.redirect(`/dashboard-admin?token=${token}`);
  };

const loginAdminController = async (req, res) => {
	const { email, password } = req.body
	const { admin, token } = await authenticateAdminService(email, password)
	res.status(200).json({ admin, token })
}

module.exports = {
	loginAdminController: catchAsync(loginAdminController),
    googleAuthController,
}
