const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const passport = require('passport');

// Rutas para autenticación local
router.post('/login', authController.loginAdminController);

// Ruta para iniciar sesión con Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Ruta de callback para Google
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }), 
    authController.googleAuthCallbackController
  );

  module.exports = router;