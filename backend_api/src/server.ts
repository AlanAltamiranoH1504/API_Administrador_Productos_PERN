import express from "express";
const app = express();
import productoRouter from "./routers/ProductoRouter";
import conexionDB from "./configuration/db";

app.use(express.json());
//Prueba de conexion a db
conexionDB.authenticate().then(() => {
    console.log("CORRECTA CONEXION A BASE DE DATOS");
});

//Definicion de routers
app.use("/productos", productoRouter);

export default app;