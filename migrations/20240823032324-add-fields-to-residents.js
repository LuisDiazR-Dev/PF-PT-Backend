'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Residents', 'isActive', {
			type: Sequelize.BOOLEAN,
			defaultValue: true,
			allowNull: false,
		})

		await queryInterface.changeColumn('Residents', 'registration_date', {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW,
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('Residents', 'isActive')

		await queryInterface.changeColumn('Residents', 'registration_date', {
			type: Sequelize.DATE,
		})
	},
}
