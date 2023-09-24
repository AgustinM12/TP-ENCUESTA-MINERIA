import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Pregunta = sequelize.define("Pregunta", {
    idPregunta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    opcionesPreguntas: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    underscored: true,
    tableName: "Preguntas"
});

Pregunta.sync({ force: false }).then(async () => {
    const count = await Pregunta.count();
    if (count === 0) {
        try {
            await Pregunta.bulkCreate([
                { opcionesPreguntas: '¿A qué rango etareo pertences?' },

            ]);
            console.log('registros de Preguntas creados exitosamente');
        } catch (error) {
            console.error('Error al crear los registros Preguntas', error);
        }
    }
})