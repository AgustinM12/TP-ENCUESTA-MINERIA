import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

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
    },
    idEducacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idLocalidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
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


// Encuesta.belongsTo(Localidad, { foreignKey: "idLocalidad" });
// Localidad.hasMany(Encuesta, { foreignKey: "idLocalidad" });

// Encuesta.belongsTo(Educacion, { foreignKey: "idEducacion" });
// Educacion.hasMany(Encuesta, { foreignKey: "idEducacion" });

// Encuesta.belongsTo(Genero, { foreignKey: "idGenero" });
// Genero.hasMany(Encuesta, { foreignKey: "idGenero" });
