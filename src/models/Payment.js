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
				type: DataTypes.ENUM('approved', 'rejected', 'pending', 'in_process', 'cancelled', 'refunded'),
            	defaultValue: null,
            	allowNull: false,
			},
			payment_date: {
				type: DataTypes.DATE,
			},
		},
		{
			timestamps: false,
		}
	)
}
