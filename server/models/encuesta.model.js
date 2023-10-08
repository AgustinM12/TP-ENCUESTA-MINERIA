import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import { Genero } from "./genero.model.js";
import { Localidad } from "./localidad.model.js";
import { Educacion } from "./nivelEstudio.model.js"

sequelize.options.timezone = '-03:00';

export const Encuesta = sequelize.define("Encuesta", {
    idEncuesta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idGenero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: "Genero",
        //     key: "idGenero"
        // }
    },
    idLocalidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: "Localidad",
        //     key: "idLocalidad"
        // }
    },
    idEducacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //     model: "Educacion",
        //     key: "idEducacion"
        // }
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    generoMusical: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    momentoEscuchaMusica: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    decadaMusical: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    frecuenciaEscucha: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    incluirProgramas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descubrirMusica: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dondeEscuchasMusica: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true,
    underscored: true,
    tableName: "Encuestas",
    modelName: "Encuesta"
});

Localidad.belongsTo(Encuesta, { foreignKey: "idLocalidad" });
Encuesta.hasMany(Localidad, { foreignKey: "idLocalidad" });

Educacion.belongsTo(Encuesta, { foreignKey: "idEducacion" });
Encuesta.hasMany(Educacion, { foreignKey: "idEducacion" });

Genero.belongsTo(Encuesta, { foreignKey: "idGenero" });
Encuesta.hasMany(Genero, { foreignKey: "idGenero" });

await Educacion.sync();
await Localidad.sync();
await Genero.sync();
await Encuesta.sync()