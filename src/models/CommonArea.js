const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'CommonArea',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			area_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			capacity: {
				type: DataTypes.INTEGER,
			},
			availability: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
				allowNull: false,
			},
			imageUrl: {
				type: DataTypes.STRING(500),
				allowNull: true,
			},
		},
		{
			timestamps: false,
		}
	)
}
