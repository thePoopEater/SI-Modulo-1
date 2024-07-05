"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const promise_1 = __importDefault(require("mysql2/promise"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const corsOptions = {
    origin: "http://localhost:4200",
    methods: "POST",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
};
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)(corsOptions));
const env = process.env;
const db_port = env.DB_PORT ? +env.DB_PORT : 0;
const port = env.PORT ? +env.PORT : 0;
let connectionConfig = {
    host: env.DB_HOST,
    port: db_port,
    database: env.DB,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
};
console.warn({ connectionConfig });
app.get("/", (req, res) => {
    res.status(200).send("Server funcionando");
});
const insert = `INSERT INTO SolicitudEvento`;
const rows1 = `(nombre_solicitante, apellido_solicitante, correo_electronico,`;
const rows2 = `nombre_evento, cantidad_participantes, fecha_inicio,`;
const rows3 = `fecha_termino, hora_inicio, hora_termino, lugar_evento,`;
const rows4 = `categoria_evento, servicios_precios, presupuesto_total)`;
const values = `VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
const query = `${insert} ${rows1} ${rows2} ${rows3} ${rows4} ${values}`;
console.warn({ query });
app.post("/crear-solicitud", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre_solicitante = "", apellido_solicitante = "", correo_electronico = "", nombre_evento = "", cantidad_participantes = 0, fecha_inicio = "", fecha_termino = "", hora_inicio = 0, hora_termino = 0, lugar_evento = "", categoria_evento = "", servicios_precios = "", presupuesto_total = 0, } = req.body;
        const connection = yield promise_1.default.createConnection(connectionConfig);
        const [result] = yield connection.execute(query, [
            nombre_solicitante,
            apellido_solicitante,
            correo_electronico,
            nombre_evento,
            cantidad_participantes,
            fecha_inicio,
            fecha_termino,
            hora_inicio,
            hora_termino,
            lugar_evento,
            categoria_evento,
            servicios_precios,
            presupuesto_total,
        ]);
        console.log(result);
        res.status(201).send(result);
    }
    catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}));
app
    .listen(port, () => {
    console.log("Server running at PORT: ", port);
})
    .on("error", (error) => {
    throw new Error(error.message);
});
