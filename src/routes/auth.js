const login = require('../controllers/authController');

router.post('/login', login);

module.exports = router;