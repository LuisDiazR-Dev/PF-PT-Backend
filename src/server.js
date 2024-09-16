const express = require('express');
const session = require('express-session');
const passport = require('passport');
const router = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
require('./services/authService');

const server = express();

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

server.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
server.use(passport.initialize());
server.use(passport.session());

server.use('/api', router);

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = server;
