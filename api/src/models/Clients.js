const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(
        "clients",
        {
            ID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        msg: "Email no valido",
                    },
                },
            },
            company: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            web: {
                type: DataTypes.STRING
            },
            facebook: {
                type: DataTypes.STRING
            },
            instagram: {
                type: DataTypes.STRING
            },
            twitter: {
                type: DataTypes.STRING
            }
        },
        {
            createdAt: false,
            updatedAt: false,
        }
    );
};
