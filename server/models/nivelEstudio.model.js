import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";


export const Educacion = sequelize.define("Educacion", {
    id_educacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    opcion_educacion: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: "Educacion",
    modelName: "Educacion"
});

export async function educacionF() {
    const count = await Educacion.count();
    if (count === 0) {
        await Educacion.bulkCreate([
            { opcion_educacion: 'Primario' },
            { opcion_educacion: 'Secundario' },
            { opcion_educacion: 'Terciario' },
            { opcion_educacion: 'Otros' },
        ]);
    }
};
