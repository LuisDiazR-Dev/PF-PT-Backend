const {
	createNotificationService,
	getAllNotificationsService,
	getResidentNotificationsService,
	getNotificationByIdService,
	updateNotificationService,
	deleteNotificationService,
} = require('../services/notificationsService')
const catchAsync = require('../utils/catchAsync')

const createNotification = async (req, res) => {
	const newNotification = await createNotificationService(req.body)
	res.status(201).json({
		message: 'Notificación creada exitosamente',
		notification: newNotification,
	})
}

const getAllNotifications = async (req, res) => {
	const notifications = await getAllNotificationsService()
	res.status(200).json(notifications)
}

const getNotificationByResident = async (req, res) => {
	const notification = await getResidentNotificationsService(
		req.params.residentName
	)
	res.status(200).json(notification)
}

const getNotificationById = async (req, res) => {
	const notification = await getNotificationByIdService(req.params.id)
	res.status(200).json(notification)
}

const updateNotification = async (req, res) => {
	const updatedNotification = await updateNotificationService(
		req.params.id,
		req.body
	)
	res.status(200).json({
		message: 'Notificación actualizada exitosamente',
		notification: updatedNotification,
	})
}

const deleteNotification = async (req, res) => {
	await deleteNotificationService(req.params.id)
	res.status(200).json({
		message: 'Notificación desactivada exitosamente',
	})
}

module.exports = {
	createNotification: catchAsync(createNotification),
	getAllNotifications: catchAsync(getAllNotifications),
	getNotificationByResident: catchAsync(getNotificationByResident),
	getNotificationById: catchAsync(getNotificationById),
	updateNotification: catchAsync(updateNotification),
	deleteNotification: catchAsync(deleteNotification),
}
