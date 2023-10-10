import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Localidad = sequelize.define("Localidad", {
    id_localidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    opcion_localidad: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: "Localidades",
    modelName: "Localidad"
});

await Localidad.sync({force:false}).then(async () => {
    const count = await Localidad.count();
        if (count === 0) {
    
            await Localidad.bulkCreate([
                { opcion_localidad: 'Formosa Capital' },
                { opcion_localidad: 'Colonia Pastoril' },
                { opcion_localidad: 'Gran Guardia' },
                { opcion_localidad: 'Mariano Boedo' },
                { opcion_localidad: 'Mojón de Fierro' },
                { opcion_localidad: 'San Hilario' },
                { opcion_localidad: 'Villa del Carmen' },
                { opcion_localidad: 'Villa Trinidad' },
                { opcion_localidad: 'Puerto Dalmacia' },
                { opcion_localidad: 'Tres Marias' },
            ]);
        }
});
