const { Router } = require('express')
const adminRoutes = require('./adminRoutes')
const condominiumRoutes = require('./condominiumRoutes')
const apartmentsRoutes = require('./apartmentsRoutes')
const commonAreaRoutes = require('./commonAreaRoutes')
const paymentsRoutes = require('./paymentsRoutes')
const residentsRoutes = require('./residentsRoutes')
const notificationsRoutes = require('./notificationsRoutes')
const suscriptionsRoutes = require('./suscriptionsRoutes')

const router = Router()

router.use('/admin', adminRoutes)
router.use('/condominiums', condominiumRoutes)
router.use('/apartments', apartmentsRoutes)
router.use('/common-areas', commonAreaRoutes)
router.use('/payments', paymentsRoutes)
router.use('/residents', residentsRoutes)
router.use('/notifications', notificationsRoutes)
router.use('/suscriptions', suscriptionsRoutes)

module.exports = router
