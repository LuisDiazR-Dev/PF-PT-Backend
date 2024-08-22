const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Apartment',
		{
			id: {
				type: DataTypes.INTEGER,
                autoIncrement: true,
				primaryKey: true,
			},
			numberApartament: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			size: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			status: {
				type: DataTypes.ENUM('Available', 'Occupied', 'Reserved'),
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	)
}
