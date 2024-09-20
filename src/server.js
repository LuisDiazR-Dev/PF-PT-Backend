const express = require('express');
const session = require('express-session');
const passport = require('passport');
const router = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
// const helmet = require('helmet');
require('./services/authServiceGoogle');  // Requiere el servicio de Google para la autenticación

const server = express();

// Middleware de seguridad
// server.use(helmet());

// Configuración de CORS antes que otros middlewares
server.use(cors({
  origin: process.env.ALLOWED_ORIGINS || '*',
  credentials: true,
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  methods: 'GET, POST, OPTIONS, PUT, DELETE'
}));

// Middlewares generales
server.use(morgan('dev'));
server.use(express.json());

// Configuración de las sesiones y Passport
if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET is not defined in environment variables");
}

server.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',  // Solo usar cookies seguras en producción
    sameSite: 'strict',  // Prevenir CSRF
  }
}));
server.use(passport.initialize());
server.use(passport.session());

// Rutas
server.use('/api', router);

// Rutas no encontradas
server.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// Middleware de manejo de errores
server.use((err, req, res, next) => {
  console.error(err.stack);  // Agregar logging de errores en desarrollo
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = server;
