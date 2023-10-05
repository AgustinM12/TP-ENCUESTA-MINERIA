import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Genero = sequelize.define("Genero", {
    idGenero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    opcionesGeneros: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    underscored: true,
    tableName: "Generos",
    modelName: "Genero"
});

