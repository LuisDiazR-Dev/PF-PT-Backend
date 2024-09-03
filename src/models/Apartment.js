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
			numberApartment: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			size: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			status: {
				type: DataTypes.ENUM('Disponible', 'Ocupado', 'Reservedo'),
				allowNull: true,
			},
			isActive: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
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
