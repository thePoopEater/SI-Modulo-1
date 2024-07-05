import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:4200",
  methods: "POST",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

const env = process.env;

const db_port: number = env.DB_PORT ? +env.DB_PORT : 0;
const port: number = env.PORT ? +env.PORT : 0;

let connectionConfig: mysql.ConnectionOptions = {
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

const insert: string = `INSERT INTO SolicitudEvento`;
const rows1: string = `(nombre_solicitante, apellido_solicitante, correo_electronico,`;
const rows2: string = `nombre_evento, cantidad_participantes, fecha_inicio,`;
const rows3: string = `fecha_termino, hora_inicio, hora_termino, lugar_evento,`;
const rows4: string = `categoria_evento, servicios_precios, presupuesto_total)`;
const values: string = `VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
const query = `${insert} ${rows1} ${rows2} ${rows3} ${rows4} ${values}`;

console.warn({ query });

app.post("/crear-solicitud", async (req, res) => {
  try {
    const {
      nombre_solicitante = "",
      apellido_solicitante = "",
      correo_electronico = "",
      nombre_evento = "",
      cantidad_participantes = 0,
      fecha_inicio = "",
      fecha_termino = "",
      hora_inicio = 0,
      hora_termino = 0,
      lugar_evento = "",
      categoria_evento = "",
      servicios_precios = "",
      presupuesto_total = 0,
    } = req.body;
    const connection = await mysql.createConnection(connectionConfig);
    const [result] = await connection.execute(query, [
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
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

app
  .listen(port, () => {
    console.log("Server running at PORT: ", port);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
