import { Router } from "express";
import { ctrlCreateEncuesta, ctrlFindAllEncuestas, ctrlFindAllEncuestas2 } from "../controllers/encuesta.controllers.js"
import path from "path";
export const encuestaRouter = Router()

encuestaRouter.post("/createEncuesta", ctrlCreateEncuesta)

encuestaRouter.get("/findAllEncuestas", ctrlFindAllEncuestas)

encuestaRouter.get("/123", ctrlFindAllEncuestas2)


//RENDERIZACIONES
encuestaRouter.get("/", (req, res) => {
    res.render("../../client/public/html/index.ejs")
})

encuestaRouter.get("/Formulario2", (req, res) => {
    res.render("../../client/public/html/encuesta.ejs")
})

encuestaRouter.get("/fin", (req, res) => {
    res.render("../../client/public/html/final.ejs")
})