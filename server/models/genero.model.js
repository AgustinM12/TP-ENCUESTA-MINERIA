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
    tableName: "Generos",
    modelName: "Genero"
});

await Genero.sync({ force: false }).then(async () => {
    console.log('Tabla de genero creada');
    // Verificar si ya existen registros en la tabla
    const count = await Genero.count();
    if (count === 0) {
        // Crear los registros de roles después de crear la tabla
        try {
            await Genero.bulkCreate([
                { id_genero: 1, opciones_generos: 'Hombre' },
                { id_genero: 2, opciones_generos: 'Mujer' },
                { id_genero: 3, opciones_generos: 'Prefiero no decirlo' },
            ]);
            console.log('registros de generos creados exitosamente');
        } catch (error) {
            console.error('Error al crear los registros generos', error);
        }
    }
});
