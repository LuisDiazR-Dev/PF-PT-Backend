const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
      vehicle_plate: {
        type: DataTypes.STRING,
      },
      pet: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      registration_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      },
      AdminId: {
        type: DataTypes.UUID,
        references: {
          model: 'Admins',
          key: 'id',
        },
      },
      CondominiumId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Condominiums',
          key: 'id',
        },
        allowNull: false,
      },
      apartmentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
