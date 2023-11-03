import { createEncuestas, findAllEncuestas, findAllEncuestas2 } from "../helpers/servicios.js";

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

export const ctrlFindAllEncuestas2 = async (req, res) => {
    try {
        const encuestas = await findAllEncuestas2();
        res.status(200).json(encuestas)
    } catch (error) {
        console.log("Error interno del servidor");
        console.log(error);
        return res.status(500).json(error)

    }
}


