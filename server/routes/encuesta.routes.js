import {Router} from "express";
import { ctrlCreateEncuesta, ctrlFindAllEncuestas, ctrlFindResults } from "../controllers/encuesta.controllers.js"
export const encuestaRouter = Router()

encuestaRouter.post("/createEncuesta", ctrlCreateEncuesta)

encuestaRouter.get("/findAllEncuestas", ctrlFindAllEncuestas)

encuestaRouter.get("/findResults", ctrlFindResults)

