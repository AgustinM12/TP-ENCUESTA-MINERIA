import { createEncuestas, findAllEncuestas, contarRespuestasUnicas } from "../helpers/servicios.js";

export const ctrlCreateEncuesta = async (req, res) => {
    const encuestaData = req.body;
    try {

        const encuestaCreada = await createEncuestas(encuestaData);

        return res.status(200).json(encuestaCreada);
    } catch (error) {
        console.log("Error interno del servidor");
        return res.status(500).json(error)
    }
};

export const ctrlFindAllEncuestas = async (req, res) => {
    try {
        const encuestas = await findAllEncuestas();
        res.status(200).json(encuestas)
    } catch (error) {
        console.log("Error interno del servidor");
        console.log(error);
        return res.status(500).json(error)

    }
}

export const ctrlFindResults = async (req, res) => {
    try {
        const respuestas = await contarRespuestasUnicas();
        return res.status(200).json(respuestas)
    } catch (error) {
        console.log("Error interno del servidor");
        console.log(error);
        return res.status(500).json(error)
    }
}