'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.renameColumn(
			'Apartments',
			'numberApartament',
			'numberApartment'
		)

		await queryInterface.addColumn('Apartments', 'isActive', {
			type: Sequelize.BOOLEAN,
			defaultValue: true,
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.removeColumn('Apartments', 'isActive')

		await queryInterface.renameColumn(
			'Apartments',
			'numberApartment',
			'numberApartament'
		)
	},
}
