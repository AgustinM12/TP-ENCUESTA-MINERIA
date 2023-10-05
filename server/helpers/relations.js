import { Genero } from "../models/genero.model.js";
import { Localidad } from "../models/localidad.model.js";
import { Educacion } from "../models/nivelEstudio.model.js";
import { Encuesta } from "../models/encuesta.model.js";

async function crearRegistrosGeneros()  {
    const count = await Genero.count();
    if (count === 0) {
        try {
            await Genero.bulkCreate([
                { opcionesGeneros: 'Hombre' },
                { opcionesGeneros: 'Mujer' },
                { opcionesGeneros: 'Otro' },

            ]);
            console.log('registros de Generos creados exitosamente');
        } catch (error) {
            console.error('Error al crear los registros Generos', error);
        }
    }
}

crearRegistrosGeneros();


Localidad.belongsTo(Encuesta, { foreignKey: "idLocalidad" });
Encuesta.hasMany(Localidad, { foreignKey: "idLocalidad" });

Educacion.belongsTo(Encuesta, { foreignKey: "idEducacion" });
Encuesta.hasMany(Educacion, { foreignKey: "idEducacion" });

Genero.belongsTo(Encuesta, { foreignKey: "idGenero" });
Encuesta.hasMany(Genero, { foreignKey: "idGenero" });