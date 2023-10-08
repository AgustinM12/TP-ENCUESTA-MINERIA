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

Genero.afterSync(async () => {
    // Verifica si ya existen registros en la tabla Genero
    const generoCount = await Genero.count();

    // Si no existen registros, crea los registros "hombre" y "mujer"
    if (generoCount === 0) {
        await Genero.bulkCreate([
            { idGenero: 1, opcionesGeneros: 'Hombre' },
            { idGenero: 2, opcionesGeneros: 'Mujer' },
            { idGenero: 3, opcionesGeneros: 'Otro' },
        ]);
    }
});
