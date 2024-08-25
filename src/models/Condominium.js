const { DataTypes, UUIDV4 } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Condominium',
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			condominium_name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			condominium_country: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			condominium_state: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			condominium_logo: {
				type: DataTypes.STRING(500),
				allowNull: true,
			},
			condominiums_apartments_number: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: 0,
			},
			imageUrl: {
				type: DataTypes.STRING(500),
				allowNull: true,
			},
			isActive: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
		},
		{
			tableName: 'Condominiums',
			timestamps: false,
		}
	)
}
