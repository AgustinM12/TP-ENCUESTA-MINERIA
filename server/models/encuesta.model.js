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
    genero_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    localidad_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    educacion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
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

Encuesta.sync({ force: true }).then(() => {
    console.log('Tabla de usuarios creada')
})


export async function asociaciones() {

    Encuesta.hasMany(Localidad, { foreignKey: "localidad_id", as: "localidadR" });
    Localidad.belongsTo(Encuesta, { foreignKey: "localidad_id", as: "localidadR" });

    Encuesta.hasMany(Educacion, { foreignKey: "educacion_id", as: "educacionR" });
    Educacion.belongsTo(Encuesta, { foreignKey: "educacion_id", as: "educacionR" });

    Encuesta.hasMany(Genero, { foreignKey: "genero_id", as: "generoR" });
    Genero.belongsTo(Encuesta, { foreignKey: "genero_id", as: "generoR" });

    return console.log("asociaciones creadas");
}

