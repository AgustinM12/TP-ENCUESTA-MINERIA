import {Router} from "express";
import { ctrlCreateEncuesta, ctrlFindAllEncuestas, ctrlFindResults } from "../controllers/encuesta.controllers.js"
export const encuestaRouter = Router()

encuestaRouter.post("/createEncuesta", ctrlCreateEncuesta)

encuestaRouter.get("/findAllEncuestas", ctrlFindAllEncuestas)

encuestaRouter.get("/findResults", ctrlFindResults)


//RENDERIZACIONES
encuestaRouter.get("/Formulario1", (req, res) => {
    res.render("index.html")
})

encuestaRouter.get("/Formulario2", (req, res) => {
    res.render("encuesta.html")
})

encuestaRouter.get("/fin", (req, res) => {
    res.render("final.html")
})