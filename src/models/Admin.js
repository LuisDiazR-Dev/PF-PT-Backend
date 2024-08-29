const bcrypt = require('bcryptjs');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
const { DataTypes } = require('sequelize');
// defino el modelo
module.exports = (sequelize) => {
  sequelize.define('Admin', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registration_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    imageUrl: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    SuscriptionId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Suscriptions',
        key: 'id',
      },
      allowNull: true,
    },
  },
  {
    hooks: {
      beforeCreate: async (admin) => {
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(admin.password, salt);
      },
    },
    timestamps: false,
  });
};
