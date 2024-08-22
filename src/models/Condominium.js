const { DataTypes, UUIDV4 } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Condominium',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: UUIDV4,
				primaryKey: true,
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
				type: DataTypes.STRING,
			},
			condominiums_apartments_number: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
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
