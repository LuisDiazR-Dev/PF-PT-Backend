'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Admins', 'isActive', {
			type: Sequelize.BOOLEAN,
			defaultValue: true,
			allowNull: false,
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('Admins', 'isActive')
	},
}
