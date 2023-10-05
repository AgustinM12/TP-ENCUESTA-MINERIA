import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Educacion = sequelize.define("Educacion", {
    idEducacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    opcionEducacion: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    underscored: true,
    tableName: "Nivel_Educacion",
    modelName: "Educacion"
});

async () => {
    const count = await Educacion.count();
    if (count === 0) {
        try {
            await Educacion.bulkCreate([
                { opcionEducacion: 'Primario Incompleto' },
                { opcionEducacion: 'Primario Completo' },
                { opcionEducacion: 'Secundario Incompleto' },
                { opcionEducacion: 'Secundario Completo' },
                { opcionEducacion: 'Terciario Incompletoo' },
                { opcionEducacion: 'Terciario Completo' },
            ]);
            console.log('registros de Educacion creados exitosamente');
        } catch (error) {
            console.error('Error al crear los registros Educacion', error);
        }
    }
}
