import express from "express";
const app = express();
import pruebaRouter from "./routers/PruebaRouter";
import conexionDB from "./configuration/db";

app.use(express.json());
//Prueba de conexion a db
conexionDB.authenticate().then(() => {
    console.log("CORRECTA CONEXION A BASE DE DATOS");
});

//Definicion de routers
app.use("/prueba", pruebaRouter);

export default app;