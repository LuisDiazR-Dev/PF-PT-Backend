const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
	sequelize.define(
		'Suscription',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			plan_price: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			registration_date: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
			},
			isActive: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
		},
		{
			timestamps: false,
		}
	)
}
