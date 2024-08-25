const { Notification, Resident, Admin } = require('../db')

const createNotificationService = async (data) => {
	const { type, content, AdminId, ResidentId } = data

	if (!type || !content || !AdminId) {
		throw new Error('Tipo, contenido y AdminId son obligatorios')
	}
	const admin = await Admin.findByPk(AdminId)
	if (!admin) throw new Error('Administrador no encontrado')

	if (ResidentId) {
		const resident = await Resident.findByPk(ResidentId)
		if (!resident) throw new Error('Residente no encontrado')
	}

	return await Notification.create({
		type,
		content,
		send_date: new Date(),
		AdminId,
		ResidentId,
		isActive: true,
	})
}

const getAllNotificationsService = async () => {
	return await Notification.findAll({ where: { isActive: true } })
}

const getResidentNotificationsService = async (residentName) => {
	const resident = await Resident.findOne({
		where: { name: residentName },
	})
	if (!resident) throw new Error('Residente no encontrado')
	return await Notification.findAll({
		where: { ResidentId: resident.id, isActive: true },
	})
}

const getNotificationByIdService = async (id) => {
	const notification = await Notification.findOne({
		where: { id: id, isActive: true },
	})
	if (!notification) throw new Error('Notificación no encontrada')
	return notification
}

const updateNotificationService = async (id, data) => {
	const notification = await Notification.findByPk(id)
	if (!notification) throw new Error('Notificación no encontrada')
	const { type, content, AdminId, ResidentId } = data
	if (AdminId) {
		const admin = await Admin.findByPk(AdminId)
		if (!admin) throw new Error('Administrador no encontrado')
	}
	if (ResidentId) {
		const resident = await Resident.findByPk(ResidentId)
		if (!resident) throw new Error('Residente no encontrado')
	}
	return await notification.update({
		type: type || notification.type,
		content: content || notification.content,
		AdminId: AdminId || notification.AdminId,
		ResidentId: ResidentId || notification.ResidentId,
	})
}

const deleteNotificationService = async (id) => {
	const notification = await Notification.findByPk(id)
	if (!notification) throw new Error('Notificación no encontrada')

	notification.isActive = false
	await notification.save()
	return notification
}

module.exports = {
	createNotificationService,
	getAllNotificationsService,
	getResidentNotificationsService,
	getNotificationByIdService,
	updateNotificationService,
	deleteNotificationService,
}
