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
dotenv_1.default.config();
const app = (0, express_1.default)();
const env = process.env;
const port = env.PORT;
let connection;
() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        connection = yield promise_1.default.createConnection({
            host: env.DB_HOST,
            database: env.DB,
            user: env.DB_USER,
            password: env.DB_PASSWORD,
        });
        console.log("conexión creada");
    }
    catch (e) {
        console.error(e);
    }
});
const query = "";
app.get("/", (req, res) => {
    res.status(200).send("Server funcionando");
    connection.execute(query);
});
app.get("/pp", (req, res) => {
    res.send();
});
app
    .listen(port, () => {
    console.log("Server running at PORT: ", port);
})
    .on("error", (error) => {
    throw new Error(error.message);
});
