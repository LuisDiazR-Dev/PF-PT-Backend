const { Router } = require('express')
const adminController = require('../controllers/adminController')

const router = Router()

router.post('/', adminController.createAdmin)
router.get('/', adminController.getAllAdmins)
router.get('/name/:username', adminController.getAdminByName)
router.get('/:id', adminController.getAdminById)
router.put('/:id', adminController.updateAdmin)
router.delete('/:id', adminController.deleteAdmin)

module.exports = router
