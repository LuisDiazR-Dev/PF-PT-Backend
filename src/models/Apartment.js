const { DataTypes } = require('sequelize')


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
			ResidentName: {
				type: DataTypes.STRING,
			},
		},
		{
			timestamps: false,
		}
	)
}
