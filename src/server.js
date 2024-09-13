const express = require('express');
const router = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const passport = require('passport'); // Asegúrate de importar passport
require('./passportConfig'); // Asegúrate de importar la configuración de passport (donde configuras GoogleStrategy)
const session = require('express-session'); // Si usas sesiones

const server = express();

// Configuración de CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

// Configuración de sesiones, necesaria para Passport si usas sesiones
server.use(session({
  secret: process.env.SESSION_SECRET,  // Necesitas definir SESSION_SECRET en tu archivo .env
  resave: false,
  saveUninitialized: true,
}));

// Inicialización de passport y la sesión (si usas sesiones)
server.use(passport.initialize());
server.use(passport.session());  // Solo si estás manejando sesiones

// Rutas
server.use('/api', router);
server.use('/api/auth', authRoutes);  // Rutas de autenticación (incluyendo Google)

// Manejo de errores
server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = server;
