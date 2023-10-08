import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import "dotenv/config"
import { createLogs } from "./helpers/logs.js"
import { environment } from "./config/environment.js";
import { syncDB } from "./config/db.js";

import "./models/encuesta.model.js";

const app = express()

app.use(cors());
app.use(helmet(
    { contentSecurityPolicy: false }
));
app.use(morgan("combined", {
    stream: {
        write: (message) => {
            const currentFilePath = new URL(import.meta.url).pathname;
            console.log(currentFilePath);
            const currentDirectory = path.dirname(currentFilePath);
            createLogs(message, currentDirectory, "logs");
        }
    }
}));

app.get("/", (req, res) => {
    res.send()
})

app.listen(environment.PORT, async () => {
    try {
        syncDB()
        console.log("Coneccion a la DB exitosa");
        console.log(`Servidor corriendo en localhost:${environment.PORT}`);
    } catch (error) {
        console.log("Error al conectar a la DB", error)
    }
})