import express from "express";
const app = express();
import productoRouter from "./routers/ProductoRouter";
import categoriasRouter from "./routers/CategoriasRouter";
import conexionDB from "./configuration/db";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./configuration/swagger";
app.use(express.json());
//Prueba de conexion a db
conexionDB.authenticate().then(() => {
    console.log("CORRECTA CONEXION A BASE DE DATOS");
});

//Definicion de routers
app.use("/productos", productoRouter);
app.use("/categorias", categoriasRouter);

//Documentacion de API
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
export default app;