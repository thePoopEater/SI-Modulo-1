import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const env = process.env;

const port = env.PORT;

// let connection: mysql.Connection;
// async () => {
//   try {
//     connection = await mysql.createConnection({
//       host: env.DB_HOST,
//       database: env.DB,
//       user: env.DB_USER,
//       password: env.DB_PASSWORD,
//     });
//     console.log("conexión creada");
//   } catch (e) {
//     console.error(e);
//   }
// };

const query = "";

app.get("/", (req, res) => {
  res.status(200).send("Server funcionando");
  // connection.execute(query);
});

app.post("/crear-solicitud", (req, res) => {
  console.log(req.body);

  res.send("caca");
});

app
  .listen(port, () => {
    console.log("Server running at PORT: ", port);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
