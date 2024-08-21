const { DataTypes } = require('sequelize')
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'Condominium',
		{
			id: {
				type: DataTypes.INTEGER,
                autoIncrement: true,
				primaryKey: true,
			},
            condominium_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            condominium_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            condominium_country: {
                type: DataTypes.STRING,
            },
            condominium_department: {
                type: DataTypes.STRING,
              },
            condominium_logo: {
                type: DataTypes.STRING,
            },
            condominiums_apartments_number: {
                type: dataTypes.INTEGER,
                autoIncrement: true,
            },
		},
		{
			timestamps: false,
		}
	)
}