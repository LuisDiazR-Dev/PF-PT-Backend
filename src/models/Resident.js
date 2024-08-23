const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Resident',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			vehicle: {
				type: DataTypes.STRING,
			},
			pet: {
				type: DataTypes.STRING,
				defaultValue: null,
			},
			registration_date: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
			},
			isActive: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
				allowNull: false,
			},
			AdminId: {
				type: DataTypes.UUID,
				references: {
					model: 'Admins',
					key: 'id',
				},
			},
		},
		{
			timestamps: false,
		}
	)
}
