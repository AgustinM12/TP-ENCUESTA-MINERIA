import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import { Genero, generoF } from "./genero.model.js";
import { Localidad, localF } from "./localidad.model.js";
import { Educacion, educacionF } from "./nivelEstudio.model.js"

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
    tableName: "Encuesta",
    modelName: "Encuesta"
});

// Encuesta.sync({ force: false }).then(() => {
//     console.log('Tabla de encuestas creada')
// })

export async function asociaciones() {

    Localidad.hasMany(Encuesta, { foreignKey: "localidad_id", as: "localidadR" });
    Encuesta.belongsTo(Localidad, { foreignKey: "localidad_id", as: "localidadR" });

    Educacion.hasMany(Encuesta, { foreignKey: "educacion_id", as: "educacionR" });
    Encuesta.belongsTo(Educacion, { foreignKey: "educacion_id", as: "educacionR" });

    Genero.hasMany(Encuesta, { foreignKey: "genero_id", as: "generoR" });
    Encuesta.belongsTo(Genero, { foreignKey: "genero_id", as: "generoR" });

    sequelize.sync().then(async () => {
        await localF()
        await generoF()
        await educacionF()
    })




    return console.log("asociaciones creadas");

}

