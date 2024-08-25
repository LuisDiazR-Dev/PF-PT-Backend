const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Payment',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			payment_state: {
				type: DataTypes.ENUM('in_process', 'complete', 'sent'),
				defaultValue: 'in_process',
				allowNull: false,
			},
			payment_date: {
				type: DataTypes.DATE,
			},
			AdminId: {
				type: DataTypes.UUID,
				references: {
					model: 'Admins',
					key: 'id',
				},
			},
			ResidentId: {
				type: DataTypes.INTEGER,
				references: {
					model: 'Residents',
					key: 'id',
				},
			},
		},
		{
			timestamps: false,
		}
	)
}
