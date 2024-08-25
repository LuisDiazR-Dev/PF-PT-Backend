const { Router } = require('express')
const notificationsController = require('../controllers/notificationsController')

const router = Router()

router.post('/', notificationsController.createNotification)
router.get('/', notificationsController.getAllNotifications)
router.get(
	'/name/:residentName',
	notificationsController.getNotificationByResident
)
router.get('/:id', notificationsController.getNotificationById)
router.put('/:id', notificationsController.updateNotification)
router.delete('/:id', notificationsController.deleteNotification)

module.exports = router
