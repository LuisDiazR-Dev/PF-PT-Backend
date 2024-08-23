const { Router } = require('express')
const adminRoutes = require('./adminRoutes')
const condominiumRoutes = require('./condominiumRoutes')
const apartmentsRoutes = require('./apartmentsRoutes')
const commonAreaRoutes = require('./commonAreaRoutes')
const paymentsRoutes = require('./paymentsRoutes')
const residentsRoutes = require('./residentsRoutes')

const router = Router()

// Rutas del administrador
router.use('/admin', adminRoutes)

// Rutas de condominios
router.use('/condominiums', condominiumRoutes)

// Rutas de Apartamentos
router.use('/apartments', apartmentsRoutes)

// Rutas de Áreas Comunes

router.use('/common-areas', commonAreaRoutes)

// Rutas para Payments

router.use('/payments', paymentsRoutes)

// Rutas para Residentes

router.use('/residents', residentsRoutes)

module.exports = router

// const router = require('express').Router()

// const {
// 	getAllApartments,
// 	postApartments,
// 	dataComplete,
// } = require('../controllers/apartments')

// router.post('/apartments', dataComplete, postApartments)
// router.get('/apartments', getAllApartments)

// module.exports = router
