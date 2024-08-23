const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Notification',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			type: {
				type: DataTypes.ENUM('payment', 'meeting'),
				defaultValue: null,
				allowNull: false,
			},
			content: {
				type: DataTypes.TEXT,
			},
			send_date: {
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
