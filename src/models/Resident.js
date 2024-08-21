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
			vehiculo: {
				type: DataTypes.STRING,
			},
			mascota: {
				type: DataTypes.BOOLEAN,
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
