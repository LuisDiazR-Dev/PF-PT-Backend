const { Payment, Resident } = require('../db')

const createPaymentService = async (data) => {
	const { payment_state, payment_date, residentId } = data

	const resident = await Resident.findByPk(residentId)
	if (!resident) throw new Error('Residente no encontrado')

	return await Payment.create({
		payment_state,
		payment_date: payment_date || new Date(),
		ResidentId: residentId,
	})
}

const getAllPaymentsService = async () => {
	return await Payment.findAll({
		include: [{ model: Resident, attributes: ['name'] }],
	})
}
const getPaymentByIdService = async (id) => {
	const payment = await Payment.findByPk(id, {
		include: [{ model: Resident }],
	})
	if (!payment) throw new Error('Pago no encontrado')
	return payment
}

const updatePaymentService = async (id, data) => {
	const { payment_state, payment_date, residentId } = data

	const payment = await Payment.findByPk(id)
	if (!payment) throw new Error('Pago no encontrado')

	if (residentId) {
		const resident = await Resident.findByPk(residentId)
		if (!resident) throw new Error('Residente no encontrado')
	}

	return await payment.update({
		payment_state,
		payment_date: payment_date || payment.payment_date,
		ResidentId: residentId || payment.ResidentId,
	})
}

const deletePaymentService = async (id) => {
	const payment = await Payment.findByPk(id)
	if (!payment) throw new Error('Pago no encontrado')
	return await payment.destroy()
}

module.exports = {
	createPaymentService,
	getAllPaymentsService,
	getPaymentByIdService,
	updatePaymentService,
	deletePaymentService,
}
