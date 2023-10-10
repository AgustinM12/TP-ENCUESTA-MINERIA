import { Encuesta } from "../models/encuesta.model.js";

export async function createEncuestas(encuestaData) {
    try {
        const encuestaCreada = await Encuesta.create({
            id_genero: encuestaData.id_genero,
            id_localidad: encuestaData.id_localidad,
            id_educacion: encuestaData.id_educacion,
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

//ENCONTRAR TODAS LAS ENCUESTAS SEGUN SU GENERO
export async function contarRespuestasUnicas() {
    try {
      const uniqueResponses = {};
  
      // Obtener valores únicos para cada columna
      const columns = Object.keys(Encuesta.rawAttributes);
      for (const column of columns) {
        const uniqueValues = await Encuesta.findAll({
          attributes: [column],
          group: [column],
        });
  
        uniqueResponses[column] = uniqueValues.length;
      }
  
      // Imprimir el resultado
      console.log("Respuestas únicas por columna:", uniqueResponses);
      return uniqueResponses
    } catch (error) {
      console.error("Error al contar respuestas únicas:", error);
    }
  }