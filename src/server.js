const express = require('express');
const session = require('express-session');
const passport = require('passport');
const router = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
require('./services/authServiceGoogle');  // Requiere el servicio de Google para la autenticación

const server = express();

// Middlewares generales
server.use(morgan('dev'));
server.use(express.json());

// Configuración de CORS
app.use(cors())
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Credentials', 'true')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
	next()
})
// server.use(cors({
//   origin: 'https://pf-pt-radmin.vercel.app',  // Cambia esto al dominio de tu frontend
//   credentials: true,
//   allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
//   methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
// }));

// Manejo de las solicitudes preflight (OPTIONS)
server.options('*', cors({
  origin: 'https://pf-pt-radmin.vercel.app',  // Cambia esto al dominio de tu frontend
  credentials: true,
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
}));



// Configuración de las sesiones y Passport
if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET is not defined in environment variables");
}

server.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
server.use(passport.initialize());
server.use(passport.session());

// Rutas
server.use('/api', router);

// Middleware de manejo de errores
server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = server;


// const express = require('express');
// const session = require('express-session');
// const passport = require('passport');
// const router = require('./routes');
// const morgan = require('morgan');
// const cors = require('cors');
// require('./services/authServiceGoogle');  // Requiere el servicio de Google para la autenticación

// const server = express();

// // Middlewares generales
// server.use(morgan('dev'));
// server.use(express.json());
// server.use(cors({
//   origin: 'https://pf-pt-radmin.vercel.app',  // Cambia esto al dominio de tu frontend
//   credentials: true,
//   allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
//   methods: 'GET, POST, OPTIONS, PUT, DELETE'
// }));

// // Configuración de las sesiones y Passport
// if (!process.env.SESSION_SECRET) {
//   throw new Error("SESSION_SECRET is not defined in environment variables");
// }

// server.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
// }));
// server.use(passport.initialize());
// server.use(passport.session());

// // Rutas
// server.use('/api', router);

// // Middleware de manejo de errores
// server.use((err, req, res, next) => {
//   res.status(err.statusCode || 500).json({ error: err.message });
// });

// module.exports = server;


// const express = require('express');
// const session = require('express-session');
// const passport = require('passport');
// const router = require('./routes');
// const morgan = require('morgan');
// const cors = require('cors');
// require('./services/authServiceGoogle');

// const server = express();

// server.use(morgan('dev'))
// server.use(express.json())
// server.use(cors())

// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });





// server.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
// }));
// server.use(passport.initialize());
// server.use(passport.session());

// server.use('/api', router);

// server.use((err, req, res, next) => {
//   res.status(err.statusCode || 500).json({ error: err.message });
// });

// module.exports = server;