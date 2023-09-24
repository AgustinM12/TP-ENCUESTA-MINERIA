import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

sequelize.options.timezone = '-03:00';

export const Usuario = sequelize.define("Usuario", {
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    }
}, {
    timestamps: true,
    underscored: true,
    tableName: "Usuarios"
});

Usuario.sync({ force: false })