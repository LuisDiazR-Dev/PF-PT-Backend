const {
	createPaymentService,
	getAllPaymentsService,
	getPaymentByIdService,
	updatePaymentService,
	deletePaymentService,
} = require('../services/paymentsServices.js')
const catchAsync = require('../utils/catchAsync.js')

const createPayment = async (req, res) => {
	const newPayment = await createPaymentService(req.body)
	res.status(201).json({
		message: 'Pago creado exitosamente',
		payment: newPayment,
	})
}

const getAllPayments = async (req, res) => {
	const payments = await getAllPaymentsService()
	res.status(200).json(payments)
}

const getPaymentById = async (req, res) => {
	const paymentById = await getPaymentByIdService(req.params.id)
	res.status(200).json(paymentById)
}

const updatePayment = async (req, res) => {
	const updatedPayment = await updatePaymentService(req.params.id, req.body)
	res.status(200).json({
		message: 'Pago actualizado exitosamente',
		payment: updatedPayment,
	})
}

const deletePayment = async (req, res) => {
	await deletePaymentService(req.params.id)
	res.status(200).json({ message: 'Pago eliminado exitosamente' })
}

module.exports = {
	createPayment: catchAsync(createPayment),
	getAllPayments: catchAsync(getAllPayments),
	getPaymentById: catchAsync(getPaymentById),
	updatePayment: catchAsync(updatePayment),
	deletePayment: catchAsync(deletePayment),
}
