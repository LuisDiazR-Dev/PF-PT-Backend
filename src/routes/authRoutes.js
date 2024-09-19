const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const passport = require('passport');

router.post('/login', authController.loginAdminController);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }), 
    authController.googleAuthCallbackController
  );

  module.exports = router;