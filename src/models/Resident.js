const { DataTypes, ENUM } = require('sequelize')
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
			vehicle_plate: {
				type: DataTypes.STRING,
			},
			pet: {
				type: DataTypes.STRING,
				defaultValue: false,
			},
			registration_date: {
				type: DataTypes.DATE,
			},
		},
		{
			timestamps: false,
		}
	)
}
