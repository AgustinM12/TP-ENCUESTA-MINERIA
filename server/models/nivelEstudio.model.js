import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { Encuesta } from "./encuesta.model.js";


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


Educacion.afterSync(async () => {

    const count = await Educacion.count();
    if (count === 0) {
            await Educacion.bulkCreate([
                { opcionEducacion: 'Primario Incompleto' },
                { opcionEducacion: 'Primario Completo' },
                { opcionEducacion: 'Secundario Incompleto' },
                { opcionEducacion: 'Secundario Completo' },
                { opcionEducacion: 'Terciario Incompleto' },
                { opcionEducacion: 'Terciario Completo' },
            ]);
    }
});