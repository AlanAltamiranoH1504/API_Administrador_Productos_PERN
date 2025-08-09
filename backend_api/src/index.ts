import server from "./server";
import dotenv from "dotenv";
dotenv.config();

server.listen(process.env.PORT_BACKEND || 4000 ,() => {
    console.log(`Aplicacion funcionando en el puerto: ${process.env.PORT_BACKEND}`);
});