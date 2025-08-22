import express from "express";
import {
    accionPrueba,
    deleteProducto, findById,
    listProductos,
    saveProducto,
    updateProducto, updateStatusProducto
} from "../controllers/ProductoController";
import {
    CreateProductoRequest,
    DeleteProductoRequest,
    FindByIdProductoRequest,
    UpdateProductoRequest
} from "../validators/ProductoValidators";

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: El id del producto
 *           example: 1
 *         nombre:
 *           type: string
 *           description: El nombre del producto
 *           example: Alexa Echo Dot 5
 *         descripcion:
 *           type: string
 *           description: Descripcion del producto
 *           example: Asistente virtual
 *         precio:
 *           type: number
 *           description: Precio del producto
 *           example: 1500
 *         disponible:
 *           type: boolean
 *           description: Estado del producto
 *           example: true
 *         categoriaId:
 *           type: number
 *           description: Foreign Key hacia la tabla Categorias
 *           example: 1
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Categorias:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: El id de la categoria
 *           example: 1
 *         nombre:
 *           type: string
 *           description: El nombre de la categoria
 *           example: Tecnologia
 *         productos:
 *           type: array
 *           description: Array de productos que pertenecen a esa categoria
 */

/**
 * @swagger
 * /productos:
 *      get:
 *          summary: Obtiene una lista de productos
 *          tags:
 *              - Productos
 *          description: Retorna una lista de productos
 *          responses:
 *              200:
 *                  description: Respuesta correcta
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Producto'
 *              404:
 *                  description: Productos no encontrados
 *
 */

/**
 * @swagger
 * /categorias:
 *      get:
 *          summary: Obtiene una lista de categorias
 *          tags:
 *              - Categorias
 *          description: Retorna una lista de categorias
 *          responses:
 *              200:
 *                  description: Respuesta correcta
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Categorias'
 *              404:
 *                  description: Productos no encontrados
 *
 */

/**
 * @swagger
 * /productos/{id}:
 *      get:
 *          summary: Obtiene un producto por id
 *          tags:
 *              - Productos
 *          description: Retorna un producto por su id
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *                description: Id del producto
 *          responses:
 *              200:
 *                  description: Producto encontrado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Producto'
 *              400:
 *                  description: Producto no encontrado
 */

/**
 * @swagger
 * /categorias/{id}:
 *      get:
 *          summary: Obtiene una categoria por id
 *          tags:
 *              - Categorias
 *          description: Retorna una categoria por su id
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *                description: Id de la categoria
 *          responses:
 *              200:
 *                  description: Categoria encontrado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Categorias'
 *              400:
 *                  description: Categoria no encontrado
 */

/**
 * @swagger
 * /productos:
 *      post:
 *          summary: Creacion de un producto nuevo
 *          tags:
 *              - Productos
 *          description: Guarda un producto en la base de datos
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              nombre:
 *                                  type: string
 *                                  example: "Monitor curvo"
 *                              descripcion:
 *                                  type: string
 *                                  example: "Monitor de 24 pulgadas"
 *                              precio:
 *                                  type: number
 *                                  example: 1500
 *                              disponible:
 *                                  type: boolean
 *                                  example: true
 *                              categoriaId:
 *                                  type: number
 *                                  example: 1
 *          responses:
 *              200:
 *                  description: Producto guardado correctamente
 *              409:
 *                  description: Conflicto en body de request
 *              404:
 *                  description: Categoria no encontrada
 *              500:
 *                  description: Error en creacion de producto
 */

/**
 * @swagger
 * /categorias:
 *      post:
 *          summary: Creacion de una categoria nueva
 *          tags:
 *              - Categorias
 *          description: Guarda una categoria en la base de datos
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              nombre:
 *                                  type: string
 *                                  example: "Tecnologia"
 *          responses:
 *              200:
 *                  description: Categoria guardada correctamente
 *              409:
 *                  description: Conflicto en body de request
 *              500:
 *                  description: Error en creacion de categoria
 */


/**
 * @swagger
 * /productos/{id}:
 *      put:
 *          summary: Actualizacion de un producto por su id
 *          tags:
 *              - Productos
 *          description: Actualiza un producto en la base de datos
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *                  description: Id del producto
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              nombre:
 *                                  type: string
 *                                  example: "Monitor curvo"
 *                              descripcion:
 *                                  type: string
 *                                  example: "Monitor de 24 pulgadas"
 *                              precio:
 *                                  type: number
 *                                  example: 1500
 *                              disponible:
 *                                  type: boolean
 *                                  example: true
 *                              categoriaId:
 *                                  type: number
 *                                  example: 1
 *          responses:
 *              200:
 *                  description: Producto actualizado correctamente
 *              409:
 *                  description: Conflicto en body de request
 *              404:
 *                  description: Categoria no encontrada
 *              500:
 *                  description: Error en creacion de producto
 */

/**
 * @swagger
 * /productos/{id}:
 *      delete:
 *          summary: Eliminacion de un producto por su id
 *          tags:
 *              - Productos
 *          description: Elimina un producto de la base de datos
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *                  description: Id del producto
 *          responses:
 *              200:
 *                  description: Producto eliminadi correctamente
 *              409:
 *                  description: Conflicto en los parametros de request
 *              404:
 *                  description: Producto no encontrado
 *              500:
 *                  description: Error en eliminacion de producto
 */

/**
 * @swagger
 * /categorias/{id}:
 *      put:
 *          summary: Actualizacion de una categoria por su id
 *          tags:
 *              - Categorias
 *          description: Actualiza una categoria en la base de datos
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *                  description: Id de la categoria
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              nombre:
 *                                  type: string
 *                                  example: "Monitor curvo"
 *          responses:
 *              200:
 *                  description: Categoria actualizada correctamente
 *              409:
 *                  description: Conflicto en body de request
 *              404:
 *                  description: Categoria no encontrada
 *              500:
 *                  description: Error en actualizacion de categoria
 */

const router = express.Router();
router.get("/prueba", accionPrueba);
router.get("", listProductos);
router.get("/:id", FindByIdProductoRequest, findById);
router.post("", CreateProductoRequest, saveProducto);
router.put("/:id", UpdateProductoRequest, updateProducto);
router.put("/status/:id", updateStatusProducto);
router.delete("/:id", DeleteProductoRequest, deleteProducto);

// @ts-ignore
export default router;