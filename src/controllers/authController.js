const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const { authenticateAdminService } = require('../services/authService')

const loginAdminController = async (req, res) => {
  const { email, password } = req.body;
  const { admin, token } = await authenticateAdminService(email, password);
  res.status(200).json({ admin, token });
};

const googleAuthController = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

const googleAuthCallbackController = (req, res) => {
  res.redirect('http://localhost:5173/dashboard-admin');
};

module.exports = {
  loginAdminController: catchAsync(loginAdminController),
  googleAuthController,
  googleAuthCallbackController,
};
