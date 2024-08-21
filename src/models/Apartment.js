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
			building: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			numberApartament: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			size: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			state: {
				type: DataTypes.ENUM('Disponible', 'Ocupado', 'Reservado'),
				allowNull: false,
				primaryKey: true,
			},
		},
		{
			timestamps: false,
		}
	)
}
