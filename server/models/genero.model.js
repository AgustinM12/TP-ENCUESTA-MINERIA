import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Genero = sequelize.define("Genero", {
    id_genero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    opciones_generos: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: "Genero",
    modelName: "Genero"
});

export async function generoF () {
    console.log('Tabla de genero creada');
    // Verificar si ya existen registros en la tabla
    const count = await Genero.count();
    if (count === 0) {
        // Crear los registros de roles después de crear la tabla
        try {
            await Genero.bulkCreate([
                { opciones_generos: 'Hombre' },
                { opciones_generos: 'Mujer' },
                { opciones_generos: 'Prefiero no decirlo' },
            ]);
            console.log('registros de generos creados exitosamente');
        } catch (error) {
            console.error('Error al crear los registros generos', error);
        }
    }
}
