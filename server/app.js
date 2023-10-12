import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";
import "dotenv/config"
import { createLogs } from "./helpers/logs.js"
import { environment } from "./config/environment.js";
import { syncDB } from "./config/db.js";
import { encuestaRouter } from "./routes/encuesta.routes.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

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

// Configurar el middleware para servir archivos estáticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "../client/public"), { "extensions": ["html", "css"] }));

app.use(express.json());
app.use(express.static(path.join(process.cwd(), '../client/public/html')));
app.use(encuestaRouter)


app.listen(environment.PORT, async () => {
    try {
        syncDB()
        console.log("Coneccion a la DB exitosa");
        console.log(`Servidor corriendo en localhost:${environment.PORT}`);
    } catch (error) {
        console.log("Error al conectar a la DB", error)
    }
})