import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

import { Pregunta } from "./preguntas.model.js";
import { Respuesta } from "./respuestas.model.js";
import { Usuario } from "./usuarios.model.js";

sequelize.options.timezone = '-03:00';

export const PreguntaRespuesta = sequelize.define("PreguntaRespuesta", {
    idAQ: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    idPregunta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idRespuesta: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: true,
    underscored: true,
    tableName: "Preguntas_Respuestas"
});

PreguntaRespuesta.sync({ force: false })

// Establece la relación muchos a muchos en ambos modelos con un nombre de restricción personalizado
Pregunta.belongsToMany(Respuesta, {
    through: {
        model: PreguntaRespuesta,
        uniqueKey: 'idAQ' // Nombre personalizado para la restricción única
    },
    foreignKey: 'idPregunta', // Nombre personalizado para la clave foránea de Pregunta
    otherKey: 'idRespuesta'   // Nombre personalizado para la clave foránea de Respuesta
});

Respuesta.belongsToMany(Pregunta, {
    through: {
        model: PreguntaRespuesta,
        uniqueKey: 'idAQ' // Nombre personalizado para la restricción única
    },
    foreignKey: 'idRespuesta', // Nombre personalizado para la clave foránea de Respuesta
    otherKey: 'idPregunta'     // Nombre personalizado para la clave foránea de Pregunta
});

PreguntaRespuesta.belongsTo(Usuario, { foreignKey: "idUsuario" })
Usuario.hasMany(PreguntaRespuesta, { foreignKey: "idUsuario" })
