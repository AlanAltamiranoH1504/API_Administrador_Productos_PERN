import {Sequelize} from "sequelize-typescript";
import dotenv from "dotenv";
import Producto from "../models/Producto";
import Categoria from "../models/Categoria";
dotenv.config();

const conexionDB = new Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    models: [Producto, Categoria],
    define: {
        timestamps: true
    },
    logging: false
});
export default conexionDB;