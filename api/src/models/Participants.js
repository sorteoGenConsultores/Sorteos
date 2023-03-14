const { DataTypes } = require("sequelize");
const db = require("../db");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "participant",
    {
      email: {
        primaryKey: true,
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
        defaultValue: false,
      },
      cellphone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      oportunities: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
