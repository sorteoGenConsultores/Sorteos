const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "participant",
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Tiene que ser un email valido",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: false
      },
      cellphone: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      oportunities: {
        type: DataTypes.FLOAT,
        allowNull: true
      }
    },
    {
      createdAt: false,
      updatedAt: false
    }
  );
};
