"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
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
    console.log(req);
    res.send("caca");
});
app
    .listen(port, () => {
    console.log("Server running at PORT: ", port);
})
    .on("error", (error) => {
    throw new Error(error.message);
});
