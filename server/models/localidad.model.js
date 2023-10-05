import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Localidad = sequelize.define("Localidad", {
    idLocalidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    opcionLocalidad: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    underscored: true,
    tableName: "Localidades",
    modelName: "Localidad"
});

async () => {
    const count = await Localidad.count();
    if (count === 0) {
        try {
            await Localidad.bulkCreate([
                { opcionLocalidad: 'Formosa Capital' },
                { opcionLocalidad: 'Colonia Pastoril' },
                { opcionLocalidad: 'Gran Guardia' },
                { opcionLocalidad: 'Mariano Boedo' },
                { opcionLocalidad: 'Mojón de Fierro' },
                { opcionLocalidad: 'San Hilario' },
                { opcionLocalidad: 'Villa del Carmen' },
                { opcionLocalidad: 'Villa Trinidad' },
                { opcionLocalidad: 'Puerto Dalmacia' },
                { opcionLocalidad: 'Tres Marias' },
            ]);
            console.log('registros de localidades creados exitosamente');
        } catch (error) {
            console.error('Error al crear los registros localidades', error);
        }
    }
}
