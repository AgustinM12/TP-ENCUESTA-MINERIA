import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import { Genero } from "./genero.model.js";
import { Localidad } from "./localidad.model.js";
import { Educacion } from "./nivelEstudio.model.js"

sequelize.options.timezone = '-03:00';

export const Encuesta = sequelize.define("Encuesta", {
    id_encuesta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_genero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "generos",
            key: "id_genero"
        }
    },
    id_localidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "localidades",
            key: "id_localidad"
        }
    },
    id_educacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "nivel_educacion",
            key: "id_educacion"
        }
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genero_musical: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    momento_escucha_musica: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    decada_musical: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    frecuencia_escucha: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    incluir_programas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descubrir_musica: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    donde_escuchas_musica: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true,
    tableName: "Encuestas",
    modelName: "Encuesta"
});

Localidad.belongsTo(Encuesta, { foreignKey: "id_localidad" });
Encuesta.hasMany(Localidad, { foreignKey: "id_localidad" });

Educacion.belongsTo(Encuesta, { foreignKey: "id_educacion" });
Encuesta.hasMany(Educacion, { foreignKey: "id_educacion" });

Genero.belongsTo(Encuesta, { foreignKey: "id_genero" });
Encuesta.hasMany(Genero, { foreignKey: "id_genero" });

await Encuesta.sync({ force: false }).then(() => {
    console.log('Tabla de usuarios creada')
})