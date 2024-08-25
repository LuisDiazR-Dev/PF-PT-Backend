const { Router } = require('express')
const paymentsConstroller = require('../controllers/paymentsController')

const router = Router()

router.post('/', paymentsConstroller.createPayment)
router.get('/', paymentsConstroller.getAllPayments)
router.get('/:id', paymentsConstroller.getPaymentById)
router.put('/:id', paymentsConstroller.updatePayment)
router.delete('/:id', paymentsConstroller.deletePayment)

module.exports = router
