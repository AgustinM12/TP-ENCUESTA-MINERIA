import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Respuesta = sequelize.define("Respuesta", {
    idRespuesta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    opcionesRespuestas: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    underscored: true,
    tableName: "Respuestas"
});

Respuesta.sync({ force: false }).then(async () => {
    const count = await Respuesta.count();
    if (count === 0) {
        try {
            await Respuesta.bulkCreate([
                { opcionesRespuestas: 'Adolescentes (de 11 a 17)' },
                { opcionesRespuestas: 'Adultos Jovenes(18  a 25)' },
                { opcionesRespuestas: 'Adultos(26 a 40)' },
                { opcionesRespuestas: 'Adultos Mayores (a partir de 40)' },

            ]);
            console.log('registros de respuestas creados exitosamente');
        } catch (error) {
            console.error('Error al crear los registros respuestas', error);
        }
    }
})
