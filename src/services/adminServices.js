const { Admin } = require('../db')

const createAdminService = async (data) => {
	const { username, password, email, registrationDate } = data

	const existingAdmin = await Admin.findOne({ where: { email: email } })
	if (existingAdmin) throw new Error('El administrador ya existe')

	return await Admin.create({
		username: username,
		password: password, //ver como cifrar en produccion
		email: email,
	})
}

module.exports = {
	createAdminService,
}
