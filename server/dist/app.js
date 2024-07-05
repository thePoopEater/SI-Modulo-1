"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const mysql_1 = __importDefault(require("mysql2/promise"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: "http://localhost:4200",
    methods: "POST, GET",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
};
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)(corsOptions));
const env = process.env;
const port = env.PORT;
 const connection = {
    host: env.DB_HOST,
    database: env.DB,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
  };

   
app.get("/", (req, res) => {
    res.status(200).send("Server funcionando");
});
app.post("/crear-solicitud", async (req, res) => {
    try {
        const connection_2 = await mysql_1.default.createConnection(connection);
         console.log("conexión creada");
         //falta servicios
         const { nombre_evento, fecha_inicio, fecha_termino, hora_inicio, hora_termino, categoria_evento, cantidad_participantes, presupuesto, lugar_evento, nombre_solicitante, apellido_solicitante, correo } = req.body;
         //CAMBIAR TABLA y cambiar .env
         const query = "INSERT INTO evento (nombre_evento, fecha_inicio, fecha_termino,hora_inicio, hora_termino, categoria_evento, cantidad_participantes,presupuesto, lugar_evento, nombre_solicitante,apellido_solicitante, correo )VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?)";
         const [result] = await connection_2.execute(query, [
            nombre_evento,fecha_inicio,fecha_termino,hora_inicio,hora_termino,categoria_evento,cantidad_participantes,presupuesto, lugar_evento, nombre_solicitante, apellido_solicitante, correo 
        ]);
    } catch (e) {
        console.error(e);
    }
    console.log(req.body);
});

app.listen(port, () => {
    console.log("Server running at PORT: ", port);
}).on("error", (error) => {
    throw new Error(error.message);
});