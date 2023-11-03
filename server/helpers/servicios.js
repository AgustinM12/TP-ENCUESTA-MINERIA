import { Model } from "sequelize";
import { Encuesta } from "../models/encuesta.model.js";
import { Genero } from "../models/genero.model.js";

export async function createEncuestas(encuestaData) {
  try {
    const encuestaCreada = await Encuesta.create({
      genero_id: encuestaData.id_genero,
      localidad_id: encuestaData.id_localidad,
      educacion_id: encuestaData.id_educacion,
      edad: encuestaData.edad,
      genero_musical: encuestaData.genero_musical,
      momento_escucha_musica: encuestaData.momento_escucha_musica,
      decada_musical: encuestaData.decada_musical,
      frecuencia_escucha: encuestaData.frecuencia_escucha,
      incluir_programas: encuestaData.incluir_programas,
      descubrir_musica: encuestaData.descubrir_musica,
      donde_escuchas_musica: encuestaData.donde_escuchas_musica,
    });

    return encuestaCreada;
  } catch (error) {
    console.log("Error al crear la encuesta", error);
    throw error
  }
}

export async function findAllEncuestas() {
  try {
    return await Encuesta.findAll();
  } catch (error) {
    console.log("Error al listar las encuestas", error);
    throw error
  }
}


export async function findAllEncuestas2() {
  try {
    return await Encuesta.findAll({ include: [{ model: Genero, as: 'generoR', attributes: ['opciones_generos'] }] });
  } catch (error) {
    console.log("Error al listar las encuestas", error);
    throw error
  }
}