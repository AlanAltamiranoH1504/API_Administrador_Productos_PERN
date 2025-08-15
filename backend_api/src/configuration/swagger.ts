import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {name: "Productos", description: "Operaciones de API relacionadas a productos"}
        ],
        info: {
            title: "REST API Node.js / Express / TypeScript",
            version: "1.0",
            description: "Documentacion de API para productos"
        }
    },
    apis: [
        "./src/routers/ProductoRouter.ts"
    ]
}
const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;