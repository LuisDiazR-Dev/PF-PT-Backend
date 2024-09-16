const passport = require('passport');
const catchAsync = require('../utils/catchAsync');

const loginAdminController = async (req, res) => {
  const { email, password } = req.body;
  const { admin, token } = await authenticateAdminService(email, password);
  res.status(200).json({ admin, token });
};

// Redirigir al usuario a Google para autenticarse
const googleAuthController = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

// Callback de Google después de la autenticación
const googleAuthCallbackController = (req, res) => {
  res.redirect('http://localhost:5173/dashboard-admin'); // Cambiar la URL según la redirección deseada después del login
};

module.exports = {
  loginAdminController: catchAsync(loginAdminController),
  googleAuthController,
  googleAuthCallbackController,
};
